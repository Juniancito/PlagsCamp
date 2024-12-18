import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { useFonts, Questrial_400Regular }from "@expo-google-fonts/questrial";
import { Alice_400Regular } from '@expo-google-fonts/alice';
import AppLoading from 'expo-app-loading';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//Importamos las screens
import LoginScreen  from './screens/LoginScreen';
import StartScreen from './screens/StartScreen';
import RegisterScreen from './screens/RegisterScreen';
import HomeScreen from './screens/HomeScreen';

//Creamos Stack para manejar la navegacion
const Stack = createStackNavigator();

export default function App (){
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Start'>
        <Stack.Screen name="Start" component={StartScreen} options={{ unmountOnBlur: true, headerShown: false }}/>
        <Stack.Screen name="Login" component={LoginScreen} options={{ unmountOnBlur: true, headerShown: false }}/>
        <Stack.Screen name="Register" component={RegisterScreen} options={{ unmountOnBlur: true, headerShown: false }}/>
        <Stack.Screen name="Home" component={HomeScreen} options={{ unmountOnBlur: true, headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

