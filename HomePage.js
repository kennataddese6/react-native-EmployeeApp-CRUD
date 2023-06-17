/**
 *
 * @format
 */

import React from 'react';
import {Text, View, Image, Button} from 'react-native';

const HomePage = props => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
      }}>
      <Text style={{fontSize: 20}}> Employee Application </Text>
      <Text style={{fontSize: 15}}> By: Semret Zerihun (C.S) </Text>
      <Text style={{fontSize: 15}}> ID: EU0092/12 (2015 E.C) </Text>

      <View
        style={[
          {
            width: '90%',
            margin: 10,
            backgroundColor: 'red',
            position: 'absolute',
            top: 200,
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
            top: 250,
          },
        ]}>
        <Button
          title="Update Employee"
          color="green"
          onPress={() => props.navigation.navigate('UpdateEmployee')}
        />
      </View>
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
            top: 350,
          },
        ]}>
        <Button
          title="Delete Employee"
          color="red"
          onPress={() => props.navigation.navigate('DeleteEmployee')}
        />
      </View>
      <View
        style={[
          {
            width: '90%',
            margin: 10,
            backgroundColor: 'white',
            position: 'absolute',
            top: 400,
          },
        ]}>
        <Button
          title="View Map"
          color="gold"
          onPress={() => props.navigation.navigate('Map')}
        />
      </View>
    </View>
  );
};
export default HomePage;
