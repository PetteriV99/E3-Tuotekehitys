import React from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, KeyboardAvoidingView, Image } from 'react-native';


export default function Login({navigation}){

    //userpass = {
    //    'username': '',
    //    'password': ''
    //}

    const pressLogin = () => {
        navigation.navigate("Home")
    }

    const pressRegister = () => {
        navigation.navigate("Register")
    }

    const onChangeText = (key, val) => {
    
        userpass.set(key, val)

    }

    return (
    
        <KeyboardAvoidingView behavior='padding' style={styles.container}>
            <View style={styles.header}>
                <Image
                    style={styles.logo}
                    source={require('../media/python.png')}
                />
            </View>
            <View style={styles.login}>
                <TextInput style={styles.input}
                    placeholder='Käyttäjänimi tai sähköposti'
                    placeholderTextColor='rgba(255,255,255,0.7)'
                    //onChangeText={username => onChangeText('username', username)}
                    
                />
                <TextInput style={styles.input}
                    placeholder='Salasana'
                    placeholderTextColor='rgba(255,255,255,0.7)'
                    secureTextEntry
                    //onChangeText={password => onChangeText('password', password)}
                />
                <TouchableOpacity style={styles.loginbtn}
                    onPress={pressLogin}
                >
                    <Text>KIRJAUDU SISÄÄN</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.skiplogin}
                    onPress={pressRegister}
                >
                    <Text style={styles.offline}>Eikö sinulla ole tunnuksia?</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>

    );
  }

  const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2d3142',
        padding: 20
        
    },
    header: {
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center'
    },
    logo: {
        width: 120,
        height: 120,
        marginBottom: 10
    },
    login: {
        marginBottom: 15
    },
    loginbtn: {
        backgroundColor: '#65def1',
        padding: 15,
        alignItems: 'center',
        borderRadius: 20
    },
    skiplogin: {
        alignItems: 'center',
        padding: 5
    },
    offline: {
        color: 'rgba(255,255,255,0.2)',
        textDecorationLine: 'underline'
    },
    input: {
        backgroundColor: 'rgba(255, 255, 255, 0.025)',
        height: 50,
        color: 'rgba(255,255,255,0.7)',
        marginBottom: 15,
        paddingHorizontal: 10,
        borderColor: '#65def1',
        borderStyle: "solid",
        borderBottomWidth: 2,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5
    }
})