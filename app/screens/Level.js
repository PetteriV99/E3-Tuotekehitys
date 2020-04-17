import React, { useRef } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Dimensions, Alert } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import * as style from '../vars/style.json'
import AnswersClass from './Functions'
import Animated from 'react-native-reanimated';

const {height, width} = Dimensions.get("screen")


class LevelContainer extends React.Component {
  state = {
    counter: 1,
    tries: 0,
    corrects: 0,
    checker: ""
  }

  onAnsClick = (id) => {
    if(AnswersClass.checkAnswer(this.state.counter, id)){
        
        this.setState({
            counter: this.state.counter + 1,
            checker: this.state.checker = "| Oikein"
          })

    }else{
        
        this.setState({
            tries: this.state.tries + 1,
            checker: this.state.checker = " | Väärin"
        })
    }
  };

 
  render() {
    var counter = this.state.counter;

    if(counter == 1){
      questionbox = "Mitä varten Pythonia käytetään?";
      answer1 = "Web-kehitykseen";
      answer2 = "Ohjelmien tekemiseen";
      answer3 = "Matematiikkaan";
      answer4 = "Systeemien skriptaamiseen";
    }
    else if(counter == 2){
      questionbox = "Mikä on oikea tapa tulostaa 'Moi, maailma!'";
      answer1 = "Print('Moi, Maailma!')";
      answer2 = "'Print('Moi, Maailma!')'";
      answer3 = "print('Moi, Maailma!')";
      answer4 = "print(Moi, Maailma!)";

    }
    else if(counter == 3){
      questionbox = "Mitä merkkiä Pythonissa käytetään kommentointia varten?";
      answer1 = "'";
      answer2 = "#";
      answer3 = "*";
      answer4 = "/";

    }
    else if(counter == 4){
      questionbox = "Kun x = '5', ja tulostat print(x*5), mikä on lopputulos?";
      answer1 = "55555";
      answer2 = "25";
      answer3 = "xxxxx";
      answer4 = "5";

    }
    else if(counter == 5){
      questionbox = "x  = '10', mitä tapahtuu kun y = int(x)?";
      answer1 = "x muuttuja muuttuu numerotyyppiin";
      answer2 = "y muuttuja muuttuu x arvoiseen numerotyyppiin";
      answer3 = "y muuttuu merkkijonoksi";
      answer4 = "x muuttuja poistetaan ja asetetaan y muuttujaan";

    }
    else if(counter == 6){
      questionbox = "Onko Pythonissa sama laskujärjestys kuin oikeassa matematiikassa?";
      answer1 = "Kyllä";
      answer2 = "Ei";
      answer3 = "Ei";
      answer4 = "Ei";

    }
    else if(counter == 7){
      questionbox = "Mikä on tulos, kun 25 / 5.0";
      answer1 = "5";
      answer2 = "Virhe";
      answer3 = "0";
      answer4 = "5.0";

    }
    else if(counter == 8){
      questionbox = "Mitä seuraavaksi tapahtuu? \n sana = 'Tämä on lause' \n uusiSana = sana + ', joka jatkuu.' \n print(uusiSana)";
      answer1 = "uusiSana";
      answer2 = "Tämä on lause, joka jatkuu.";
      answer3 = "sana, joka jatkuu.";
      answer4 = "Tulostuksen aikana tulee virhe.";

    }else{
        Alert.alert(
            "Olet suorittanut moduuli 1. onnistuneesti!",
            "Kysymyksiä: 8\nYritykset: " + this.state.tries,
            [
              { text: "Valmis" }
            ]
          );
    }

  


    return (
     <View style={styles.container}>
        <View style={styles.top}>
            <View style={styles.questionbox}>
                <Text style={styles.questionbox_info}>
                    {questionbox}
                </Text>
            </View>    

            <View style={styles.answer_amount}>
                <Text style={styles.counter}>Tehtävä: {counter} {this.state.checker}</Text>
            </View>   
        </View>
        <View style={styles.bottom}>
            <View style={styles.answers}>

                

                <TouchableOpacity style={styles.answer}
                    onPress={() => this.onAnsClick(1)}
                >
                    <Text style={styles.answer_info}> 1: {answer1}</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.answer}
                    onPress={() => this.onAnsClick(2)}
                > 
                    <Text style={styles.answer_info}> 2: {answer2}</Text>
                </TouchableOpacity>
                </View>

                

                <View style={styles.answers}>
                <TouchableOpacity style={styles.answer}
                    onPress={() => this.onAnsClick(3)}
                >
                    <Text style={styles.answer_info}> 3: {answer3}</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.answer}
                    onPress={() => this.onAnsClick(4)}
                >
                    <Text style={styles.answer_info}> 4: {answer4}</Text>
                </TouchableOpacity>
            </View>
        </View>
     </View>
    );
  }
}



export default function Level() {
  return (
      <LevelContainer />
    );

}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: style.background
  },
  top: {
    flex: 1,
    backgroundColor: "#D7D8DE",
    borderBottomWidth: 5
  },
  bottom: {
    flex: 1
  },
  questionbox:{
    borderRadius: 5,
    marginVertical: 10,
    width: width*0.85,
    height: height*0.3,
    backgroundColor: '#242940',

    justifyContent: "center",
    alignItems: 'center',
    alignSelf: "center",
    
  },
  questionbox_info:{
    
    textAlign: "left",
    color: "#fff",
    fontSize: 19,
    margin: 20

  },
  answer_amount:{
  },
  counter:{
    textAlign: "center",
    color: "#242940",
    fontSize: 18
  },
  answers: {
    flexDirection: "row",
    textAlign: "center",
    justifyContent: "center",
  },
  answer: {
    backgroundColor: '#157ba6',
    width: width*0.45,
    height: height*0.15,
    margin: 10,
    padding: 10,
    borderRadius: 15,
    textAlign: "center",
    justifyContent: "center"
  },

  answer_info: {
    textAlign: "center",
    color: "#fff",
    fontSize: 15
  },
});