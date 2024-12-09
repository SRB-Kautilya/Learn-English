import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import PictureWithDescription from './src/bottom_navigation/PictureWithDescription'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//import PictureWithDescription from './PictureWithDescription';
import DictionaryScreen from './src/bottom_navigation/DictionaryScreen';
import AccountScreen from './src/bottom_navigation/AccountScreen';
import { NavigationContainer } from '@react-navigation/native';
//import BottomNavigation from './src/bottom_navigation/BottomNavigation';
const Tab = createBottomTabNavigator();

export default function App() {

  return (
    <SafeAreaProvider>
   <NavigationContainer>
   <Tab.Navigator>
       <Tab.Screen name='write' component={PictureWithDescription}/>
      <Tab.Screen name='Dictionary' component={DictionaryScreen} />
       <Tab.Screen name='Account' component={AccountScreen} /> 
   </Tab.Navigator>
   </NavigationContainer>
   </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
 
container:{
flexDirection:'column',
}
});
