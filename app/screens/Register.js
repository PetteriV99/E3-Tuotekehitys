import React from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Dimensions } from 'react-native';

import * as style from '../vars/style.json'

const {height, width} = Dimensions.get("screen")

export default function Register({navigation}){

    return (
        
        <View style={styles.container}>
            <Text style={styles.text}>Tunnuksien luominen ei ole vielä käytössä!</Text>
            <Text style={styles.text_p}>Sillä aikaa kun tunnuksien käyttö ei ole tuettu. Voit vain painaa "kirjaudu sisään".</Text>
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
    text_p: {
        textAlign: "center",
        fontSize: 12,
        paddingHorizontal: 40,
        paddingVertical: 10,
        color: "rgba(255, 255, 255, 0.6)"
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