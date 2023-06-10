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

const Register = props => {
  const [FirstName, setFirstName] = useState('');
  const [MiddleName, setMiddleName] = useState('');
  const [Salary, setSalary] = useState('');
  const [Deparment, setDepartment] = useState('');
  const [IdNumber, setID] = useState(Math.floor(Math.random() * 9000) + 1000);
  const [Names, setNames] = useState('Ethiopia');
  const [valid, setValid] = useState(false);
  const [display, setDisplay] = useState(false);
  const [checked, setChecked] = useState('');

  const dispatch = useDispatch();

  const reset = () => {
    setFirstName('');
    setMiddleName('');
    setSalary('');
    setDepartment('');
    setChecked('');
  };

  useEffect(() => {
    Names === '' ? setValid(false) : setValid(true);
  }, [Names]);
  const employeeData = [
    {
      FirstName,
      MiddleName,
      Salary,
      Deparment,
      IdNumber,
    },
  ];
  const submitForm = async randomNumber => {
    setID(randomNumber);
    try {
      console.log('step 1');
      const registedEmployees = await AsyncStorage.getItem('Employees');
      console.log('step 2');
      if (registedEmployees !== null) {
        console.log('step 3');
        const employees = JSON.parse(registedEmployees);
        console.log('Step 4', employees, 'pushhhhhhhhhhhhhhhhh', employeeData);
        const newData = employees.concat(employeeData);
        console.log('here is the new data', newData);
        await AsyncStorage.setItem('Employees', JSON.stringify(newData));
        console.log('registerd', newData);
        setDisplay(true);
        reset();
      } else {
        await AsyncStorage.setItem('Employees', JSON.stringify(employeeData));
        console.log('registerd and half', employeeData);
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
      Employee Registerd
    </Text>
  );
  useEffect(() => {
    if (display) {
      setTimeout(() => {
        setDisplay(false);
      }, 5000);
    }
  }, [display]);
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
        top: 160,
        left: 40,
      }}>
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
          margin: 4,
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
      <TextInput
        placeholder="Deparment"
        value={IdNumber}
        onChangeText={deparment =>
          setID(Math.floor(Math.random() * 9000) + 1000)
        }
        style={{
          borderColor: 'black',
          borderWidth: 1,
          margin: 2,
          display: 'none',
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

        <Button
          title="Register"
          onPress={() => {
            submitForm(Math.floor(Math.random() * 9000) + 1000);
          }}
        />
      </View>
    </View>
  );
};
export default Register;
