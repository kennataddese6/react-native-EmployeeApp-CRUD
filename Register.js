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

const Register = props => {
  const [FirstName, setFirstName] = useState('');
  const [MiddleName, setMiddleName] = useState('');
  const [Salary, setSalary] = useState('');
  const [Deparment, setDepartment] = useState('');
  const [Names, setNames] = useState('Ethiopia');
  const [valid, setValid] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    Names === '' ? setValid(false) : setValid(true);
  }, [Names]);
  const employeeData = {
    FirstName,
    MiddleName,
    Salary,
    Deparment,
  };
  const submitForm = async () => {
    try {
      console.log('step 1');
      const registedEmployees = await AsyncStorage.getItem('Employees');
      console.log('step 2');
      if (registedEmployees !== null) {
        console.log('step 3');
        const employees = [JSON.parse(registedEmployees)];
        console.log('Step 4', employees, 'push', employeeData);
        employees.push(employeeData);
        console.log('Step 5 ', employees);
        await AsyncStorage.setItem('Employees', JSON.stringify(employees));
        console.log('registerd', employees);
      } else {
        await AsyncStorage.setItem('Employees', JSON.stringify(employeeData));
        console.log('step 3 and half');
        console.log('registerd and half');
      }
    } catch (error) {
      console.log('HERE IS the error', error);
    }
  };

  return (
    <View
      style={{
        position: 'absolute',
        top: 190,
        left: 40,
      }}>
      <TextInput
        placeholder="First Name"
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
        onChangeText={middlename => setMiddleName(middlename)}
        style={{
          borderColor: 'black',
          borderWidth: 1,
          width: 300,
          margin: 2,
        }}
      />
      <TextInput
        placeholder="Salary"
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
            backgroundColor: 'red',
          },
        ]}>
        <Button title="Register" onPress={submitForm} />
      </View>
    </View>
  );
};
export default Register;
