import * as React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import ModulesScreen from '../screens/Modules';
import LevelsScreen from '../screens/Levels';
import LevelScreen from '../screens/Level';

const LevelNav = createStackNavigator();

//
// Hoitaa kaikki navigaatioon liittyvät screenit Moduuli näytöstä eteenpäin
//

function levelNav(){
    return(
        <LevelNav.Navigator>
            <LevelNav.Screen
                name="Modules"
                component={ModulesScreen}
                options={{
                    title: "Valitse Moduuli",
                    headerTitleAlign: "center"
                }}
            />
            <LevelNav.Screen
                name="Levels"
                component={LevelsScreen}
                options={{
                    title: "Valitse Tehtävä",
                    headerTitleAlign: "center"
                }}
            />
            <LevelNav.Screen
                name="Level"
                component={LevelScreen}
                options={{
                    headerBackTitleVisible: false,
                    title: "Moduuli 1",
                    headerTitleAlign: "center"
                }}
            />
        </LevelNav.Navigator>
    );
}

export default levelNav;