import React from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Dimensions } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import * as style from '../vars/style.json'


const {height, width} = Dimensions.get("screen")


export default function Levels({navigation}){

    const pressLevel = () => {
        navigation.navigate("Level")
    }


    return (
        <ScrollView style={styles.container}>
            <View style={styles.modules}>
                
                <TouchableOpacity style={styles.module}
                    onPress={pressLevel}>
                        <Text style={styles.module_info}>Tehtävä 1</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.module_locked}>
                        <Text style={styles.module_info_locked}>Tehtävä 2</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.module_locked}>
                        <Text style={styles.module_info_locked}>Tehtävä 3</Text>
                </TouchableOpacity>
            </View> 
            <View style={styles.modules}>
                
                <TouchableOpacity style={styles.module_locked}>
                        <Text style={styles.module_info_locked}>Tehtävä 4</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.module_locked}>
                        <Text style={styles.module_info_locked}>Tehtävä 5</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.module_locked}>
                        <Text style={styles.module_info_locked}>Tehtävä 6</Text>
                </TouchableOpacity>
            </View> 
            <View style={styles.modules}>
                
                <TouchableOpacity style={styles.module_locked}>
                        <Text style={styles.module_info_locked}>Tehtävä 7</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.module_locked}>
                        <Text style={styles.module_info_locked}>Tehtävä 8</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.module_locked}>
                        <Text style={styles.module_info_locked}>Tehtävä 9</Text>
                </TouchableOpacity>
            </View> 
            <View style={styles.modules}>
                
                <TouchableOpacity style={styles.module_locked}>
                        <Text style={styles.module_info_locked}>Tehtävä 10</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.module_locked}>
                        <Text style={styles.module_info_locked}>Tehtävä 11</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.module_locked}>
                        <Text style={styles.module_info_locked}>Tehtävä 12</Text>
                </TouchableOpacity>
            </View> 

        </ScrollView>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: style.background

        
    },
    modules: {
        flexDirection: "row",
        textAlign: "center",
        justifyContent: "center"
    },
    module: {
        backgroundColor: '#157ba6',
        height: width*0.25,
        width: width*0.25,
        margin: 15,
        padding: 6,
        borderRadius: 30,
        textAlign: "center",
        justifyContent: "center"


    },
    module_locked: {
        backgroundColor: '#6572',
        height: width*0.25,
        width: width*0.25,
        margin: 15,
        padding: 6,
        borderRadius: 30,
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
})