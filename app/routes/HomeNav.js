import * as React from 'react';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from 'react-native-vector-icons'

import HomeScreen from '../screens/Home';
import SettingsScreen from '../screens/Settings';
import levelNav from './LevelNav';

import * as style from '../vars/style.json'

const HomeStack = createMaterialBottomTabNavigator();

//
// Home screen main navigaatio, eli se mikä siinä alhaalla on. Hallinnoi home ja settings screenit.
// Moduuli navigaatio iconia painaessa navigaatio vaihtuu "LevelNav"-navigaatioon.
//

function homeNav(){
    return(
    
        <HomeStack.Navigator
            barStyle={{ backgroundColor: style.accent_color }}

            >
            <HomeStack.Screen
                name="Home" 
                component={HomeScreen}
                options={{
                    title: "Koti",
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="home" color={color} size={22} />
                    ),
                }}
            />
            <HomeStack.Screen
                name="Modules"

                component={levelNav}
                options={{
                    title: "Moduulit",
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="format-list-checkbox" color={color} size={22} />
                    ),
                }}
            />
            <HomeStack.Screen
                name="Settings"

                component={SettingsScreen}
                options={{
                    title: "Asetukset",
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="settings" color={color} size={22} />
                    ),
                }}
            />
        </HomeStack.Navigator>
    
    );
}

export default homeNav;