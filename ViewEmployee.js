/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {DataTable} from 'react-native-paper';

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
  FlatList,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {getEmployee} from './employeeSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ViewEmployee = props => {
  const [FirstName, setFirstName] = useState('');
  const [MiddleName, setMiddleName] = useState('');
  const [Salary, setSalary] = useState('');
  const [Deparment, setDepartment] = useState('');
  const dispatch = useDispatch();
  const [allEmployees, setAllEmployees] = useState([]);
  const {employees} = useSelector(state => state.employees);
  let Employees = [];

  const getEmployee = async () => {
    try {
      const emps = await AsyncStorage.getItem('Employees');
      if (emps !== null) {
        Employees = JSON.parse(emps);
        setAllEmployees(JSON.parse(emps));
        console.log('here is let Em', Employees);
        console.log('here are all the employess', allEmployees);
      }
    } catch (error) {
      console.log('here is error for getitem', error);
    }
  };

  useEffect(() => {
    getEmployee();
    allEmployees.map(employee => {
      console.log('Department is', employee.FirstName);
    });
  }, []);
  console.log('here is let Em2', Employees);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 22,
    },
    item: {
      padding: 10,
      fontSize: 18,
      height: 44,
    },
  });
  return (
    <DataTable style={styles.container}>
      <DataTable.Header style={styles.tableHeader}>
        <DataTable.Title>First Name</DataTable.Title>
        <DataTable.Title>Middle Name</DataTable.Title>
        <DataTable.Title>Salary</DataTable.Title>
        <DataTable.Title>Deparment</DataTable.Title>
      </DataTable.Header>
      {allEmployees
        ? allEmployees.map(employee => (
            <DataTable.Row>
              <DataTable.Cell>{employee.FirstName}</DataTable.Cell>
              <DataTable.Cell>{employee.MiddleName}</DataTable.Cell>
              <DataTable.Cell>{employee.Salary}</DataTable.Cell>
              <DataTable.Cell>{employee.Deparment}</DataTable.Cell>
            </DataTable.Row>
          ))
        : console.log('null')}
    </DataTable>
  );
};
export default ViewEmployee;
