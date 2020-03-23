import React from 'react';
import {
    Text, 
    View, 
    StyleSheet, 
    TouchableOpacity, 
    ScrollView, 
    ImageBackground,
    MaterialCommunityIcons,
    Dimensions,
    Image
} from 'react-native';

import * as Progress from 'react-native-progress';

import style from '../vars/style'
import lang from '../vars/lang_fin'

const {height, width} = Dimensions.get("screen")

export default function Home({navigation}){

    const pressModules = () => {
        navigation.navigate("Modules")
    }

    return (
        <ScrollView style={styles.container}>
            <ImageBackground source={require('../media/header.png')} style={styles.top}>
                <View style={styles.profile}>
                    <View style={styles.iconbox}>
                        <Image style={styles.icon}
                                source={require('../media/avatar.png')}/>
                    </View>

                    <View style={styles.stats}>
                        <Text style={styles.h1}>Etunimi Sukunimi</Text>
                        <Text style={styles.p}>{lang.home_progress_title} 2/105</Text>
                        
                        <Progress.Bar progress={0.1} width={width*0.35} color={style.accent_color} />
                    </View>    
                </View>
            </ImageBackground>
            <View style={styles.bottom}>
                <Text style={styles.slider_h1}>{lang.home_welcome_title} Etunimi!</Text>
                <View style={styles.welcomebox}>
                    <Text style={styles.welcome_text}>{lang.home_welcome_message}</Text>
                </View>
                <TouchableOpacity style={styles.modules}>
                    <Text style={styles.h1}
                        onPress={pressModules}>
                        {lang.home_start_training}   
                    </Text>
                </TouchableOpacity>
                <View style={styles.page_links}>
                    <Text style={styles.slider_h1}>{lang.home_slider_title}</Text>
                    <ScrollView style={styles.slider} horizontal={true}>
                        <View style={styles.links}>
                            <Image style={styles.link}
                                    source={require('../media/w3school.png')}/>
                            <View style={styles.desctiption}>
                                <TouchableOpacity>
                                    <Text style={styles.desc_h}>w3school</Text>
                                </TouchableOpacity>
                                <Text style={styles.desc_p}>{lang.home_slider_w3school}</Text>
                            </View>
                        </View>
                        <View style={styles.links}>
                            <Image style={styles.link}
                                    source={require('../media/pythonsite.png')}/>
                            <View style={styles.desctiption}>
                                <TouchableOpacity>
                                    <Text style={styles.desc_h}>Python.org</Text>
                                </TouchableOpacity>
                                <Text style={styles.desc_p}>{lang.home_slider_python}</Text>
                            </View>
                        </View>
                        <View style={styles.links}>
                            <Image style={styles.link}
                                    source={require('../media/tutorialspoint.png')}/>
                            <View style={styles.desctiption}>
                                <TouchableOpacity>
                                    <Text style={styles.desc_h}>TutorialsPoint</Text>
                                </TouchableOpacity>
                                <Text style={styles.desc_p}>{lang.home_slider_tutpoint}</Text>
                            </View>
                        </View>
                    </ScrollView>
                </View>
            </View>
        </ScrollView>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: style.background
    },
    settings: {
        position: "absolute",
        top: 25,
        right: 25,
        alignItems: "center",
        justifyContent: "center"
    },
    top: {
        flex: 4,
        padding: 30
    },
    profile: {
        flex: 1,
        flexDirection: "row",
        marginVertical: 30,
        borderRadius: 10
    },
    iconbox: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    icon: {
        width: 100,
        height: 100,
        borderRadius: 200,
        borderWidth: 4,
        borderColor: "white",
        backgroundColor: "white"
    },
    stats: {
        flex: 1,
        justifyContent: "center",
        textAlign: "left"
    },
    h1: {
        fontWeight: "bold",
        color: "white"
    },
    p: {
        color: "white"
    },
    bottom: {
        flex: 5,
        backgroundColor: style.background,
        borderTopWidth: 1,
        borderColor: style.accent_color,
        padding: 30,
        alignItems: "center"
    },
    modules: {
        width: 200,
        height: 50,
        backgroundColor: style.accent_color,
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "center",
        marginVertical: 20
    },
    page_links: {
        borderTopWidth: 2,
        borderColor: "rgba(255, 255, 255, 0.1)"
    },
    welcome_text: {
        color: "rgba(255, 255, 255, 0.8)",
        textAlign: "center"
    },
    slider: {
        height: undefined
    },
    slider_h1: {
        fontSize: 30,
        paddingBottom: 10,
        color: "white"
    },
    links: {
        marginRight: 7,
        backgroundColor: "rgba(255, 255, 255, 0.1)",
        borderTopRightRadius: 20,
        height: 220
    },
    link:{
        width: undefined,
        height: 120,
        borderTopRightRadius: 20,
        borderWidth: 1,
        borderColor: "white",
        backgroundColor: "white"
    },
    desctiption: {
        width: 190,
        margin: 5
    },
    desc_h: {
        fontSize: 16,
        fontWeight: "bold",
        color: "white",
        padding: 2,
        textDecorationLine: "underline"
    },
    desc_p: {
        fontSize: 12,
        color: "rgba(255, 255, 255, 0.8)"
    }
})