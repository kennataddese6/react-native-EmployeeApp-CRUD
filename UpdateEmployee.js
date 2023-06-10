/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {createEmployee} from './employeeSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {RadioButton} from 'react-native-paper';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
  Image,
  Button,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const UpdateEmployee = props => {
  const [FirstName, setFirstName] = useState('');
  const [MiddleName, setMiddleName] = useState('');
  const [Salary, setSalary] = useState('');
  const [Deparment, setDepartment] = useState('');
  const [IdNumber, setID] = useState('');
  const [error, setError] = useState(false);
  const [checked, setChecked] = useState('');

  const [valid, setValid] = useState(false);
  const [display, setDisplay] = useState(false);
  const dispatch = useDispatch();

  const reset = () => {
    setFirstName('');
    setMiddleName('');
    setSalary('');
    setDepartment('');
    setID('');
  };

  const submitForm = async () => {
    try {
      console.log('step 1');
      const registedEmployees = await AsyncStorage.getItem('Employees');
      console.log('step 2');
      if (registedEmployees !== null) {
        console.log('step 3');
        const employees = JSON.parse(registedEmployees);
        const filterdEmployee = employees.filter(
          employee => employee.IdNumber !== IdNumber,
        );
        if (filterdEmployee.length === employees.length) {
          setError(true);
          console.log('employee not found');
        } else {
          const UpdateEmployees = employees.map(employee => {
            if (employee.IdNumber === IdNumber) {
              console.log('employeee is found and is updating');
              return {
                ...employee,
                FirstName: `${FirstName}`,
                MiddleName: `${MiddleName}`,
                Salary: `${Salary}`,
                Deparment: `${Deparment}`,
              };
            } else {
              return employee;
            }
          });
          await AsyncStorage.setItem(
            'Employees',
            JSON.stringify(UpdateEmployees),
          );
          setDisplay(true);
          reset();
        }
      } else {
        setDisplay(true);

        reset();
      }
    } catch (error) {
      console.log('HERE IS the error', error);
    }
  };
  const Message = (
    <Text
      style={{
        margin: 5,
        color: 'green',
        textAlign: 'center',
        display: display ? 'flex' : 'none',
      }}>
      Employee Updated Successfully
    </Text>
  );
  const errorMessage = (
    <Text
      style={{
        margin: 5,
        color: 'red',
        textAlign: 'center',
        display: error ? 'flex' : 'none',
      }}>
      Employee not found!
    </Text>
  );
  useEffect(() => {
    if (display) {
      setTimeout(() => {
        setDisplay(false);
      }, 5000);
    }
    if (error) {
      setTimeout(() => {
        setError(false);
      }, 5000);
    }
  }, [display, error]);
  const styles = StyleSheet.create({
    radioButtonContainer: {
      flexDirection: 'row',
      alignItems: 'flex-end',
      marginHorizontal: 58,
    },
  });
  return (
    <View
      style={{
        position: 'absolute',
        top: 120,
        left: 40,
      }}>
      <TextInput
        placeholder="Enter ID Here"
        keyboardType="numeric"
        value={IdNumber}
        onChangeText={id => setID(parseInt(id))}
        style={{
          borderColor: 'black',
          borderWidth: 1,
          margin: 2,
        }}
      />
      <TextInput
        placeholder="First Name"
        value={FirstName}
        onChangeText={firstname => setFirstName(firstname)}
        style={{
          borderColor: 'black',
          borderWidth: 1,
          width: 300,
          margin: 2,
        }}
      />
      <TextInput
        placeholder="Middle Name"
        value={MiddleName}
        onChangeText={middlename => setMiddleName(middlename)}
        style={{
          borderColor: 'black',
          borderWidth: 1,
          width: 300,
          margin: 2,
        }}
      />
      <RadioButton.Group onValueChange={setChecked} value={checked}>
        <View style={styles.radioButtonContainer}>
          <Text>Male</Text>
          <RadioButton value="Male" />
          <Text>Female</Text>
          <RadioButton value="Female" />
        </View>
      </RadioButton.Group>
      <TextInput
        placeholder="Salary"
        keyboardType="numeric"
        value={Salary}
        onChangeText={salary => setSalary(salary)}
        style={{
          borderColor: 'black',
          borderWidth: 1,
          width: 300,
          margin: 2,
        }}
      />
      <TextInput
        placeholder="Deparment"
        value={Deparment}
        onChangeText={deparment => setDepartment(deparment)}
        style={{
          borderColor: 'black',
          borderWidth: 1,
          margin: 2,
        }}
      />

      <View
        style={[
          {
            width: '90%',
            margin: 10,
            backgroundColor: 'GhostWhite',
          },
        ]}>
        {Message}
        {errorMessage}
        <Button title="Update" onPress={submitForm} color="green" />
      </View>
    </View>
  );
};
export default UpdateEmployee;
