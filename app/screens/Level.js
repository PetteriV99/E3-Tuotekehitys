import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import * as style from '../vars/style.json'

const {height, width} = Dimensions.get("screen")

var level = 1;
var questionbox = "";
var answer1 = "";
var answer2 = "";
var answer3 = "";
var answer4 = "";
var correct_answer = 0;

class LevelContainer extends React.Component {
  state = {
    counter: 1,
  }

  onIncrement = () => {
    this.setState({
      counter: this.state.counter + 1,
    })
  };

 
  render() {
    var counter = this.state.counter;

    if(counter == 1){
      questionbox = "Mitä varten Pythonia käytetään?";
      answer1 = "Web-kehitykseen";
      answer2 = "Ohjelmien tekemiseen";
      answer3 = "Matematiikkaan";
      answer4 = "Systeemien skriptaamiseen";
      correct_answer = 0;
    }
    if(counter == 2){
      questionbox = "Mikä on oikea tapa tulostaa 'Moi, maailma!'";
      answer1 = "Print('Moi, Maailma!')";
      answer2 = "'Print('Moi, Maailma!')'";
      answer3 = "print('Moi, Maailma!')";
      answer4 = "print(Moi, Maailma!)";
      correct_answer = 3;

    }
    if(counter == 3){
      questionbox = "Mitä merkkiä Pythonissa käytetään kommentointia varten?";
      answer1 = "'";
      answer2 = "#";
      answer3 = "*";
      answer4 = "/";
      correct_answer = 2;

    }
    if(counter == 4){
      questionbox = "Kun x = '5', ja tulostat print(x*5), mikä on lopputulos?";
      answer1 = "55555";
      answer2 = "25";
      answer3 = "xxxxx";
      answer4 = "5";
      correct_answer = 1;

    }
    if(counter == 5){
      questionbox = "x  = '10', mitä tapahtuu kun y = int(x)?";
      answer1 = "x muuttuja muuttuu numerotyyppiin";
      answer2 = "y muuttuja muuttuu x arvoiseen numerotyyppiin";
      answer3 = "y muuttuu merkkijonoksi";
      answer4 = "x muuttuja poistetaan ja asetetaan y muuttujaan";
      correct_answer = 1;

    }
    if(counter == 6){
      questionbox = "Onko Pythonissa sama laskujärjestys kuin oikeassa matematiikassa?";
      answer1 = "Kyllä";
      answer2 = "Ei";
      answer3 = "Ei";
      answer4 = "Ei";
      correct_answer = 0;

    }
    if(counter == 7){
      questionbox = "Mikä on tulos, kun 25 / 5.0";
      answer1 = "5";
      answer2 = "Virhe";
      answer3 = "0";
      answer4 = "5.0";
      correct_answer = 4;

    }
    if(counter == 8){
      questionbox = "Mitä seuraavaksi tapahtuu? \n sana = 'Tämä on lause' \n uusiSana = sana + ', joka jatkuu.' \n print(uusiSana)";
      answer1 = "uusiSana";
      answer2 = "Tämä on lause, joka jatkuu.";
      answer3 = "sana, joka jatkuu.";
      answer4 = "Tulostuksen aikana tulee virhe.";
      correct_answer = 2;

    }

  
   

      


    return (
     <ScrollView style={styles.container}>

        <View style={styles.questionbox}>
          <Text style={styles.questionbox_info}>
            {questionbox}
          </Text>
        </View>       


        <View style={styles.answer_amount}>

            <Text style={styles.counter}>Tehtävä: {counter}</Text>
        </View>



        <View style={styles.answers}>
 
          <TouchableOpacity style={styles.answer}
            onPress={this.onIncrement}
         >
            <Text style={styles.answer_info}> 1: {answer1}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.answer}
            onPress={this.onIncrement}
        > 
            <Text style={styles.answer_info}> 2: {answer2}</Text>
          </TouchableOpacity>
        </View>




        <View style={styles.answers}>
          <TouchableOpacity style={styles.answer}
            onPress={this.onIncrement}
          >
         
            <Text style={styles.answer_info}> 3: {answer3}</Text>
          </TouchableOpacity>
        
          <TouchableOpacity style={styles.answer}
            onPress={this.onIncrement}
          >
            <Text style={styles.answer_info}> 4: {answer4}</Text>
          </TouchableOpacity>
        
        </View>
     </ScrollView>

      
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
  answers: {
    flexDirection: "row",
    textAlign: "center",
    justifyContent: "center"
},
answer: {
  backgroundColor: '#157ba6',
  height: width*0.25,
  width: width*0.45,
  margin: 15,
  padding: 5,
  borderRadius: 15,
  textAlign: "center",
  justifyContent: "center",
  top: height*0.45
  },

  answer_info: {
    textAlign: "center",
    color: "#fff",
    fontSize: 18
},
  questionbox:{
    borderWidth: 5,
    borderColor: 'rgba(0,0,0,1)',
    

    height: width*0.85,
    width: width*0.95,
    backgroundColor: '#999',
    justifyContent: "center",

    position: 'absolute',
    alignItems: 'center',
    alignSelf: "center",
    
  },

  questionbox_info:{
    
      textAlign: "left",
      color: "#fff",
      fontSize: 22,
      margin: 10,
      padding: 1,



  },
  
  answer_amount:{
    alignSelf: "center",

    color: "#fff",
    fontSize: 12,
    top: height*0.4
  },
  counter:{
    fontSize: 18
  }
});