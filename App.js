import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View,Button,Text,useState } from 'react-native';
import * as React from 'react';
import 'react-native-gesture-handler';

import Onboard from './Screen/Onboard';
import LoginScreen from './Screen/LoginScreen';



const Stack = createStackNavigator();

const MyStack = () => {
  
  
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Onboard" component={Onboard} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default MyStack;
