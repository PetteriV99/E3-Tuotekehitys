import * as React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import LoginScreen from '../screens/Login';
import RegisterScreen from '../screens/Register';
import HomeScreen from '../screens/Home'
import SettingsScreen from '../screens/Settings'
import ModulesScreen from '../screens/Modules'

const LoginStack = createStackNavigator();

function loginStack(){
    return(
        <NavigationContainer>
            <LoginStack.Navigator
                screenOptions={{
                    headerShown: false
                }}>
                <LoginStack.Screen
                    name="Login" component={LoginScreen}
                />
                <LoginStack.Screen
                    name="Register" component={RegisterScreen}
                />
                <LoginStack.Screen
                    name="Home" component={HomeScreen}
                />
                <LoginStack.Screen
                    name="Settings" component={SettingsScreen}
                />
                <LoginStack.Screen
                    name="Modules" component={ModulesScreen}
                />
            </LoginStack.Navigator>
        </NavigationContainer>
    );
}

export default loginStack;