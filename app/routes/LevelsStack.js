import * as React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import LevelScreen from '../screens/Level';

const LevelsStack = createStackNavigator();

function levelsStack(){
    return(
        <NavigationContainer>
            <LevelsStack.Navigator
                screenOptions={{
                    headerShown: false
                }}>
                <LevelsStack.Screen
                    name="Level" component={LevelsStack}
                />
            </LevelsStack.Navigator>
        </NavigationContainer>
    );
}

export default levelsStack;