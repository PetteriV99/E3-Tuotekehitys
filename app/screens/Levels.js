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
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
})