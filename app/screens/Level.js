import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  Navigator,
  TouchableHighlight,
  TouchableOpacity
} from 'react-native';
//import * as RNFS from 'react-native-fs';

const appName = 'Simplipy';
/*
RNFS.readFile(filePath, 'ascii').then(res => {
})
.catch(err => {
  
  console.log(err.message, err.code);
  
});
*/
class LevelContainer extends React.Component {
  
  
  state = {
    counter: 0,
  }
  render() {
    const counter = this.state.counter;

    const kysymys1 = "kys?";
    const kysymys2 = "kys 2?";
    const kysymys3 = "kys 3?";
    const kysymysbox = "if (year % 4) == 0: \n     if (year % 100) == 0: \n         if (year % 400) == 0: \n                print'{0} is a leap year'.format(year)) \n            else: \n              print('{0} is not a leap year'.format(year))";



    return (
      <View style={styles.container}>
        <Text style={styles.questionbox}>
          {kysymysbox}
        </Text>

        <Text style={styles.counter}>Vastausten määrä: {counter}</Text>
        
        <TouchableOpacity 
          style={styles.floatingButton3}
          onPress={this.onIncrement}
        >
        <Text style={styles.counter}> 3: {kysymys3}</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.floatingButton2}
          onPress={this.onIncrement}
        >
        <Text style={styles.counter}> 2: {kysymys2}</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.floatingButton}
          onPress={this.onIncrement}
        >
        <Text style={styles.counter}> 1: {kysymys1}</Text>
        </TouchableOpacity>

      </View>

      
    );
  }
  onIncrement = () => {
    this.setState({
      counter: this.state.counter + 1,
    })
  };
}



export default function Level() {
  return (
      <LevelContainer />
    );

}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  floatingButton: {
    borderWidth: 5,
    borderColor: 'rgba(0,0,0,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 210,
    width: 300,
    height: 60,
    backgroundColor: '#fff',
    borderRadius: 100,
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
  },

  floatingButton3: {
    borderWidth: 5,
    borderColor: 'rgba(0,0,0,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 50,
    width: 300,
    height: 60,
    backgroundColor: '#fff',
    borderRadius: 100,
    
  },
  questionbox:{
    borderWidth: 5,
    borderColor: 'rgba(0,0,0,1)',
    borderRadius: 10,
    height: 300,
    width: 400,
    bottom: 370,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#999',
    alignContent: "center",
    alignSelf: "center",
    


  },
  counter: {
    fontSize: 25,
  }
});