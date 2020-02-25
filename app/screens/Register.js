import React from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

export default function Register({navigation}){

    return (
        <View style={styles.regform}>
        
                <Text style={styles.header}>Luo käyttäjätunnus</Text>
                
                <TextInput style={styles.textinput} placeholder="Nimi"
                underlineColorAndroid={'transparent'} />
                
                <TextInput style={styles.textinput} placeholder="Sähköposti"
                underlineColorAndroid={'transparent'} />	
    
                <TextInput style={styles.textinput} placeholder="Salasana"
                secureTextEntry={true} underlineColorAndroid={'transparent'} />			
                
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.btntext}>Luo käyttäjätunnus</Text>
                </TouchableOpacity>
                
        </View>
        );

}

const styles = StyleSheet.create({
	regform: {
		alignSelf: 'stretch',
	},
	header: {
		fontSize: 24,
		color: '#fff',
		paddingBottom: 10,
		marginBottom: 40,
		borderBottomColor: '#199187',
		borderBottomWidth: 1,
	},
	textinput: {
		alignSelf: 'stretch',
		height: 40,
		marginBottom: 30,
		color: '#fff',
		borderBottomColor: '#f8f8f8',
		borderBottomWidth: 1,
	},
	button: {
		alignSelf: 'stretch',
		alignItems: 'center',
		padding: 20,
		backgroundColor: '#59cbbd',
		marginTop: 30,
	},
	btntext: {
		color: '#fff',
		fontWeight: 'bold',
	}
});