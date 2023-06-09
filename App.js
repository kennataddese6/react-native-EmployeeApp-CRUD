/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import {store} from './store';
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
import HomePage from './HomePage';
import ViewEmployee from './ViewEmployee';
import DeleteEmployee from './DeleteEmployee';
import UpdateEmployee from '/UpdateEmployee';
const Stack = createNativeStackNavigator();
const MyStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Hompage"
        component={HomePage}
        options={{title: 'HomePage'}}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{title: 'Register Employee'}}
      />
      <Stack.Screen
        name="ViewEmployee"
        component={ViewEmployee}
        options={{title: 'View Employee'}}
      />
      <Stack.Screen
        name="DeleteEmployee"
        component={DeleteEmployee}
        options={{title: 'Delete Employee'}}
      />
      <Stack.Screen
        name="UpdateEmployee"
        component={UpdateEmployee}
        options={{title: 'Update Employee'}}
      />
    </Stack.Navigator>
  );
};
const App = props => {
  const [Names, setNames] = useState('Ethiopia');
  const [valid, setValid] = useState(false);
  const FirstName = 'Kenna';
  useEffect(() => {
    Names === '' ? setValid(false) : setValid(true);
  }, [Names]);
  return (
    <Provider store={store}>
      <NavigationContainer>
        <MyStack />
      </NavigationContainer>
    </Provider>
  );
};
export default App;
