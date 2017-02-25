import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Image,
  Text,
  View,
  TouchableHighlight,
  Navigator,
  AlertIOS
} from 'react-native';
import Button from 'react-native-button';

export default class MoneyTrees extends Component {
  _handlePress() {
    AlertIOS.prompt(
      'Login to MoneyTrees',
      'Welcome back, Vivek. Sign in below.',
      [
        {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
        {text: 'OK', onPress: () =>  }
      ],
      'secure-text'
    );
 }
  render() {
    return (
      <View style = {styles.container}>
      <Text style = {styles.welcome}> Welcome! </Text>
      <Text style = {styles.instructions}> </Text>
      <Button
        style={{fontSize: 20, color: 'green'}}
        styleDisabled={{color: 'red'}}
        onPress={() => this._handlePress()}>
        Login
      </Button>
      <Text style = {styles.pop}> </Text>
      <Button
        style={{fontSize: 20, color: 'green'}}
        styleDisabled={{color: 'red'}}
        onPress={() => this._handlePress()}>
        Sign Up
      </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 25,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 20,
  },
  pop: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 7,
  },
});

AppRegistry.registerComponent('MoneyTrees', () => MoneyTrees);
