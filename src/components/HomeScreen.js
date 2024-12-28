import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome5 } from '@expo/vector-icons';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { FirstTab } from './FirstTab';
import DictionaryScreen from '../bottom_navigation/DictionaryScreen';
import AccountScreen from '../bottom_navigation/AccountScreen';

const Tab = createBottomTabNavigator();

export const HomeScreen = () => {
  return (
    <SafeAreaProvider>
      <Tab.Navigator
        initialRouteName="DescribeThePicture"
        screenOptions={{
          tabBarActiveTintColor: '#00aaff',  // Active tab icon color
          tabBarInactiveTintColor: 'gray',   // Inactive tab icon color
          tabBarStyle: {                    // Style for the tab bar itself
            backgroundColor: '#fff',        // Tab bar background
            height: 60,                     // Tab bar height
            paddingBottom: 5,
          },
        }}
      >
        <Tab.Screen
          name="DescribeThePicture"
          component={FirstTab}
          options={{
            tabBarLabel: 'Write',
            tabBarIcon: ({ color, size }) => (
              <FontAwesome5 name="pencil-alt" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Dictionary"
          component={DictionaryScreen}
          options={{
            tabBarLabel: 'Dictionary',
            tabBarIcon: ({ color, size }) => (
              <FontAwesome5 name="book" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Account"
          component={AccountScreen}
          options={{
            tabBarLabel: 'Account',
            tabBarIcon: ({ color, size }) => (
              <FontAwesome5 name="user" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </SafeAreaProvider>
  );
};
