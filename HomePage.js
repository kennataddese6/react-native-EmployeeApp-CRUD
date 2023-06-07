/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
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
import Register from './Register';

const HomePage = props => {
  const [Names, setNames] = useState('Ethiopia');
  const [valid, setValid] = useState(false);
  const FirstName = 'Kenna';
  useEffect(() => {
    Names === '' ? setValid(false) : setValid(true);
  }, [Names]);
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
      }}>
      <Text style={{fontSize: 20}}> Employee Application </Text>
      <Text style={{fontSize: 15}}> By: Semret Zerihun </Text>

      <View
        style={[
          {
            width: '90%',
            margin: 10,
            backgroundColor: 'red',
            position: 'absolute',
            top: 300,
          },
        ]}>
        <Button
          title="Register Employee"
          color="#FF3D00"
          onPress={() => props.navigation.navigate('Register')}
        />
      </View>
      <View
        style={[
          {
            width: '90%',
            margin: 10,
            backgroundColor: 'red',
            position: 'absolute',
            top: 350,
          },
        ]}>
        <Button title="Update Employee" color="green" />
      </View>
      <View
        style={[
          {
            width: '90%',
            margin: 10,
            backgroundColor: 'red',
            position: 'absolute',
            top: 400,
          },
        ]}>
        <Button
          title="View Employee"
          color=""
          onPress={() => props.navigation.navigate('ViewEmployee')}
        />
      </View>
      <View
        style={[
          {
            width: '90%',
            margin: 10,
            backgroundColor: 'red',
            position: 'absolute',
            top: 450,
          },
        ]}>
        <Button title="Delete Employee" color="red" />
      </View>
    </View>
  );
};
export default HomePage;
