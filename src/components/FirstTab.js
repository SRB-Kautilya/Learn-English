import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
 import { createStackNavigator } from '@react-navigation/stack';
import PictureWithDescription from '../bottom_navigation/PictureWithDescription';
import { AIResponse } from './AIResponse';

const Stack = createStackNavigator();

export const FirstTab = () => { 
    return (
            <Stack.Navigator>
                <Stack.Screen name="PictureWithDescription"  component={PictureWithDescription} options={{ headerShown: false }} />
                <Stack.Screen name="Details" component={AIResponse} options={{ headerShown: false }} />
            </Stack.Navigator>
    )
} 