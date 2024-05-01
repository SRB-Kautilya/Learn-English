
import { FontAwesome5 } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import PictureWithDescription from './PictureWithDescription';
import DictionaryScreen from './DictionaryScreen';
import AccountScreen from './AccountScreen';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';

const Tab = createBottomTabNavigator();

const BottomNavigation = () => {

    return (
        <NavigationContainer>
         <Tab.navigator>
             <Tab.screen name='write' component={PictureWithDescription} ></Tab.screen>
            <Tab.screen name='Dictionary' component={DictionaryScreen}></Tab.screen>
             <Tab.screen name='Account' component={AccountScreen}> </Tab.screen>
         </Tab.navigator>
         </NavigationContainer>
      
    )

}

export default BottomNavigation;