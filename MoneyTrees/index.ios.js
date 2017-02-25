import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Image,
  Button,
  Text,
  View,
  TouchableHighlight,
  Navigator,
  AlertIOS
} from 'react-native';

export default class MoneyTrees extends Component {
  _onPressButton() {

  }
  render() {
    return (
      <View style = {styles.container}>
      <Text style = {styles.welcome}> Welcome! </Text>
      <Text style = {styles.instructions}> Login to see your Money Tree</Text>
      <TouchableHighlight onPress={this._onPressButton}>
        <Text> replace this with a button </Text>
      </TouchableHighlight>
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
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('MoneyTrees', () => MoneyTrees);
