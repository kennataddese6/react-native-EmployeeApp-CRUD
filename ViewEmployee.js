/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {DataTable, RadioButton} from 'react-native-paper';

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
  const [search, setSearch] = useState('');
  let Employees = [];

  const getEmployee = async () => {
    try {
      const emps = await AsyncStorage.getItem('Employees');
      if (emps !== null) {
        Employees = JSON.parse(emps);
        setAllEmployees(JSON.parse(emps));
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

  useEffect(() => {
    let filteredEmployees = [];
    allEmployees.filter(oneEmployee => {
      if (oneEmployee.FirstName.toLowerCase().includes(search.toLowerCase())) {
        filteredEmployees.push(oneEmployee);
        console.log('here is the search', search);
        if (search === '') {
          getEmployee();
        }
      } else {
        console.log('i am here');
        console.log(`${oneEmployee.FirstName.toLowerCase()} vs ${search}`);
      }
    });
    console.log('filllllll', !filteredEmployees.length);
    if (filteredEmployees.length) {
      setAllEmployees(filteredEmployees);
    }
  }, [search]);

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
    searchBar: {
      backgroundColor: '#fff',
      borderRadius: 10,
      marginHorizontal: 20,
      marginVertical: 10,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,

      elevation: 5,
    },
    searchInput: {
      paddingVertical: 10,
      paddingHorizontal: 20,
      fontSize: 16,
    },
  });
  return (
    <View>
      <View style={styles.searchBar}>
        <TextInput
          placeholder="Search Employee"
          style={styles.searchInput}
          onChangeText={word => setSearch(word)}
          value={search}
        />
      </View>
      <DataTable.Header style={styles.tableHeader}>
        <DataTable.Title>ID</DataTable.Title>
        <DataTable.Title>First Name</DataTable.Title>
        <DataTable.Title>Middle Name</DataTable.Title>
        <DataTable.Title>Deparment</DataTable.Title>
        <DataTable.Title>Salary</DataTable.Title>
      </DataTable.Header>
      <ScrollView style={{position: 'relative', bottom: 10}}>
        <DataTable style={styles.container}>
          {allEmployees ? (
            allEmployees.map(employee => (
              <DataTable.Row key={employee.IdNumber}>
                <DataTable.Cell>{employee.IdNumber}</DataTable.Cell>
                <DataTable.Cell>{employee.FirstName}</DataTable.Cell>
                <DataTable.Cell>{employee.MiddleName}</DataTable.Cell>
                <DataTable.Cell>{employee.Deparment}</DataTable.Cell>
                <DataTable.Cell>
                  {employee.Salary.toString().replace(
                    /\B(?=(\d{3})+(?!\d))/g,
                    ',',
                  )}
                  ETB
                </DataTable.Cell>
              </DataTable.Row>
            ))
          ) : (
            <DataTable.Row>
              <DataTable.Cell>No Rows To Show</DataTable.Cell>
            </DataTable.Row>
          )}
        </DataTable>
      </ScrollView>
    </View>
  );
};
export default ViewEmployee;
