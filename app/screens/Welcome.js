import React, {Component} from 'react';
import { Text, View, StyleSheet, Image} from 'react-native';

export default class Welcome extends Component {
    render() {
      return (
          <View style={styles.container}>
              <Image style={{width:300, height: 300}}
                  source={require('../media/python.png')}/>
              <Text style={styles.logoText}>Tervetuloa.</Text>
          </View>
          )
    }
  }

const styles = StyleSheet.create({
	container: {
        flex: 1,
        backgroundColor: '#36485f',
		justifyContent: 'center',
		alignItems: 'center',
	},
	logoText: {
		marginVertical: 15,
		fontSize:18,
		color: 'rgba(255,255,255,0.7)'
	}
});