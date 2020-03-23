import React from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Dimensions } from 'react-native';

import * as style from '../vars/style.json'

const {height, width} = Dimensions.get("screen")

export default function Settings({navigation}){

    return (
        
        <View style={styles.container}>
            <Text style={styles.text}>Asetuksien vaihtaminen ei ole vielä käytössä!</Text>
            <TouchableOpacity
                style={styles.back}
                onPress={navigation.goBack}
            >
                <Text style={styles.back_text}>Takaisin</Text>
            </TouchableOpacity>
        </View>

    );

}

const styles = StyleSheet.create({
	container: {
        flex: 1,
        justifyContent: "center",
        alignContent: "center",
        backgroundColor: style.background
    },
    text: {
        textAlign: "center",
        fontSize: 26,
        color: "rgba(255, 255, 255, 0.8)"
    },
    back: {
        backgroundColor: "#fff",
        borderRadius: 20,
        width: width/2,
        height: 30,
        marginHorizontal: width/4,
        justifyContent: "center",
        alignContent: "center"
    },
    back_text: {
        textAlign: "center"
    }
});