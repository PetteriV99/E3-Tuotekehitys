<<<<<<< Updated upstream
import React, {Component} from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Dimensions } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import * as style from '../vars/style.json'
const {height, width} = Dimensions.get("screen")

export default function Modules({navigation}){

    const pressModule = () => {
        navigation.navigate("Levels")
    }

    return (
        <ScrollView style={styles.container}>
            <View style={styles.modules}>
                
                <TouchableOpacity style={styles.module}
                    onPress={pressModule}
                >
                        <Text style={styles.module_name}>Moduuli 1</Text>
                        <Text style={styles.module_info}>Moduulin Aihe</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.module_locked}>
                        <Text style={styles.module.name_locked}>Moduuli 2</Text>
                        <Text style={styles.module_info_locked}>Moduulin Aihe</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.module_locked}>
                        <Text style={styles.module.name_locked}>Moduuli 3</Text>
                        <Text style={styles.module_info_locked}>Moduulin Aihe</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.modules}>
                
                <TouchableOpacity style={styles.module_locked}>
                        <Text style={styles.module.name_locked}>Moduuli 1</Text>
                        <Text style={styles.module_info_locked}>Moduulin Aihe</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.module_locked}>
                        <Text style={styles.module.name_locked}>Moduuli 2</Text>
                        <Text style={styles.module_info_locked}>Moduulin Aihe</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.module_locked}>
                        <Text style={styles.module.name_locked}>Moduuli 3</Text>
                        <Text style={styles.module_info_locked}>Moduulin Aihe</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.modules}>
                
                <TouchableOpacity style={styles.module_locked}>
                        <Text style={styles.module.name_locked}>Moduuli 1</Text>
                        <Text style={styles.module_info_locked}>Moduulin Aihe</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.module_locked}>
                        <Text style={styles.module.name_locked}>Moduuli 2</Text>
                        <Text style={styles.module_info_locked}>Moduulin Aihe</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.module_locked}>
                        <Text style={styles.module.name_locked}>Moduuli 3</Text>
                        <Text style={styles.module_info_locked}>Moduulin Aihe</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
=======
import React from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';


export default function Levels({navigation}){

    const pressLevel = () => {
        navigation.navigate("Level")
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity 
                style={styles.floatingButton2}
                onPress={pressLevel}
                >
            <Text style={styles.container}> Tehtävä 1 </Text>
            </TouchableOpacity>
        </View>
>>>>>>> Stashed changes
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
<<<<<<< Updated upstream
        backgroundColor: style.background
    },
    header: {
        backgroundColor: '#4325',
        paddingTop: 50,
        paddingBottom: 10,
        marginBottom: 20
    },
    h1:{
        color: "#fff",
        fontSize: 22,
        textAlign: "center",
        fontWeight: "bold"
    },
    modules: {
        flexDirection: "row",
        textAlign: "center",
        justifyContent: "center"
    },
    module: {
        backgroundColor: '#6578',
        height: width*0.21,
        width: width*0.20,
        margin: 20,
        padding: 6,
        borderRadius: 10
    },
    module_locked: {
        backgroundColor: '#6572',
        height: width*0.21,
        width: width*0.20,
        margin: 20,
        padding: 6,
        borderRadius: 10,
        textAlign: "center",
        justifyContent: "center"
    },
    module_name: {
        textAlign: "center",
        color: "#fff",
        fontSize: 16
    },
    module_name_locked: {
        textAlign: "center",
        color: "#777",
        fontSize: 16
    },
    module_info: {
        textAlign: "center",
        color: "#fff",
        fontSize: 12
    },
    module_info_locked: {
        textAlign: "center",
        color: "#777",
        fontSize: 12
    },
=======
        backgroundColor: '#D5484F',
        padding: 20

        
    },
    floatingButton2: {
        borderWidth: 5,
        borderColor: 'rgba(0,0,0,0.2)',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        bottom: 130,
    
        width: 300,
        height: 60,
        backgroundColor: '#fff',
        borderRadius: 100,
      }
>>>>>>> Stashed changes
})