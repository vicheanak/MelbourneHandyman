import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../HomeScreen';
import SettingScreen from './SettingScreen';
import StackNavigator from './StackNavigator';

const Tab = createBottomTabNavigator();


export default function BottomTabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={StackNavigator} options={{ headerShown: false }}/>
      <Tab.Screen name="Setting" component={SettingScreen} options={{ headerShown: false }}/>
    </Tab.Navigator>
  )
}