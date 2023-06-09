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

const DeleteEmployee = props => {
  const [FirstName, setFirstName] = useState('');
  const [MiddleName, setMiddleName] = useState('');
  const [Salary, setSalary] = useState('');
  const [Deparment, setDepartment] = useState('');
  const [IdNumber, setID] = useState('');
  const [valid, setValid] = useState(false);
  const [display, setDisplay] = useState(false);
  const [error, setError] = useState(false);
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
        console.log('here is the id', IdNumber);
        const filterdEmployee = employees.filter(
          employee => employee.IdNumber !== IdNumber,
        );
        if (filterdEmployee.length === employees.length) {
          setError(true);
          console.log('employee not found');
        } else {
          await AsyncStorage.setItem(
            'Employees',
            JSON.stringify(filterdEmployee),
          );
          setDisplay(true);
        }

        reset();
      } else {
        console.log('no employee');
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
      Employee Deleted
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
  return (
    <View
      style={{
        position: 'absolute',
        top: 190,
        left: 40,
      }}>
      <TextInput
        placeholder="Enter ID Here"
        keyboardType="numeric"
        value={IdNumber}
        onChangeText={Id => setID(parseInt(Id))}
        style={{
          borderColor: 'black',
          borderWidth: 1,
          width: 300,
          margin: 2,
        }}
      />

      <View
        style={[
          {
            width: '90%',
            margin: 10,
            backgroundColor: 'white',
          },
        ]}>
        {Message}
        {errorMessage}
        <Button title="Delete" color="red" onPress={submitForm} />
      </View>
    </View>
  );
};
export default DeleteEmployee;
