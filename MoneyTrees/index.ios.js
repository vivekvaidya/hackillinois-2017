import React, { PropTypes, Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Image,
  Text,
  View,
  TouchableHighlight,
  AlertIOS
} from 'react-native';

import { withRouter } from 'react-router'
import Button from 'react-native-button';

class MoneyTrees extends React.Component {

  _handlePress = () => {
    AlertIOS.prompt(
      'Login to MoneyTrees',
      'Welcome back, Vivek. Sign in below.',
      [
        {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
        {text: 'OK', onPress: password => console.log('OK Pressed, password: ' + password)},
      ],
      'secure-text'
    )
  }

  constructor(props) {
      super(props)
      this.nextPage = this.nextPage.bind(this);
  }

  nextPage() {
    this.props.router({
      name: "Second",
      component: Second
    });
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
        onPress={this.nextPage.push}>
        Sign Up
      </Button>
      </View>
    )
  }
}

const firstRoute = {
  name: 'Welcome!',
  component: MoneyTrees,
};

class Second extends React.Component{
  render() {
    return (
      <View style={styles.container}>
        <Text>
          Second
        </Text>
      </View>
    )
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
})

export default withRouter(MoneyTrees)


AppRegistry.registerComponent('MoneyTrees', () => MoneyTrees)
