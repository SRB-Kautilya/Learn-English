
import React,{ useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import PictureWithDescription from './src/bottom_navigation/PictureWithDescription'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//import PictureWithDescription from './PictureWithDescription';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { FirstTab } from './src/components/FirstTab';
import { HomeScreen } from './src/components/HomeScreen';
import {SignIn} from './src/components/SignIn';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Stack = createStackNavigator();

export default function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);


  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const userToken = await AsyncStorage.getItem('userToken');
        if (userToken) {
          setIsLoggedIn(true);
        } else {
          setIsLoggedIn(false);
        }
      } catch (error) {
        console.error('Error checking login status:', error);
      }
    };

    checkLoginStatus();
  }, []);


  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {isLoggedIn ? (
          <Stack.Screen name="Home" component={HomeScreen} />
        ) : (
          <>
          <Stack.Screen name="SignIn" component={SignIn} />
          <Stack.Screen name="Home" component={HomeScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({

  container: {
    flexDirection: 'column',
  }
});
