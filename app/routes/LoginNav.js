import * as React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import LoginScreen from '../screens/Login';
import RegisterScreen from '../screens/Register';
import homeNav from '../routes/HomeNav';

const LoginStack = createStackNavigator();

//
// Hoitaa Navigaation login screenin ja kirjautumises välillä. Jos käyttäjä kirjautuu sisään
// siirretään navigaatio "HomeNav"-navigaatioon.
//

function loginNav(){
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
                    name="Home" component={homeNav}
                />
            </LoginStack.Navigator>
        </NavigationContainer>
    );
}

export default loginNav;