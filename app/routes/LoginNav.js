import * as React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import LoginScreen from '../screens/Login';
import RegisterScreen from '../screens/Register';
<<<<<<< Updated upstream:app/routes/LoginStack.js
import HomeStack from './HomeStack'
=======
import homeNav from '../routes/HomeNav';
>>>>>>> Stashed changes:app/routes/LoginNav.js

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
<<<<<<< Updated upstream:app/routes/LoginStack.js
                    name="Home" component={HomeStack}
=======
                    name="Home" component={homeNav}
>>>>>>> Stashed changes:app/routes/LoginNav.js
                />
            </LoginStack.Navigator>
        </NavigationContainer>
    );
}

export default loginNav;