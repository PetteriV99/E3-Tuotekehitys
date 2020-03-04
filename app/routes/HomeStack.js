import * as React from 'react';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { MaterialCommunityIcons } from 'react-native-vector-icons'

import HomeScreen from '../screens/Home';
//import LevelsScreen from '../screens/Modules';
import SettingsScreen from '../screens/Settings';

const HomeStack = createMaterialBottomTabNavigator();


//
// EI KÄYTÖSSÄ TÄSSÄ VERSIOSSA
//
function homeStack(){
    return(
    
        <HomeStack.Navigator
            style={{ backgroundColor: '#24CDCD' }}
            >
            <HomeStack.Screen
                name="Home" 
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="home" color={color} size={22} />
                    ),
                }}
            />
            <HomeStack.Screen
                name="Settings" component={SettingsScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="settings" color={color} size={22} />
                    ),
                }}
            />
        </HomeStack.Navigator>
    
    );
}

export default homeStack;