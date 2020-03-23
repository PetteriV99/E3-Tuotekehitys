import * as React from 'react';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from 'react-native-vector-icons'

import HomeScreen from '../screens/Home';
<<<<<<< Updated upstream:app/routes/HomeStack.js
import LevelsScreen from '../screens/Levels';
=======
>>>>>>> Stashed changes:app/routes/HomeNav.js
import SettingsScreen from '../screens/Settings';
import levelNav from './LevelNav';

import * as style from '../vars/style.json'

<<<<<<< Updated upstream:app/routes/HomeStack.js
function homeStack(){
=======
const HomeStack = createMaterialBottomTabNavigator();

//
// Home screen main navigaatio, eli se mikä siinä alhaalla on. Hallinnoi home ja settings screenit.
// Moduuli navigaatio iconia painaessa navigaatio vaihtuu "LevelNav"-navigaatioon.
//

function homeNav(){
>>>>>>> Stashed changes:app/routes/HomeNav.js
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
<<<<<<< Updated upstream:app/routes/HomeStack.js
                name="Levels" component={LevelsScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="format-list-numbered" color={color} size={22} />
=======
                name="Modules"

                component={levelNav}
                options={{
                    title: "Moduulit",
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="format-list-checkbox" color={color} size={22} />
>>>>>>> Stashed changes:app/routes/HomeNav.js
                    ),
                }}
            />
            <HomeStack.Screen
<<<<<<< Updated upstream:app/routes/HomeStack.js
                name="Settings" component={SettingsScreen}
=======
                name="Settings"

                component={SettingsScreen}
>>>>>>> Stashed changes:app/routes/HomeNav.js
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