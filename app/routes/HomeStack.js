import * as React from 'react';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { MaterialCommunityIcons } from 'react-native-vector-icons'

import HomeScreen from '../screens/Home';
import LevelsScreen from '../screens/Levels';
import SettingsScreen from '../screens/Settings';

import LevelsStack from './LevelsStack';


const HomeStack = createMaterialBottomTabNavigator();

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
                name="Levels" component={LevelsScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="format-list-numbered" color={color} size={22} />
                    ),
                }}
            />
            <LevelsStack.Screen
                    name="Level" component={LevelsStack}
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