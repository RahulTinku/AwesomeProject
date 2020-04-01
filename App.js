/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Navigator, Image} from 'react-native';
import { TabNavigator } from 'react-navigation';
import NavigationExperimental from 'react-native-deprecated-custom-components';

import Login from './src/components/Login/Login';
import Dashboard from './src/components/Dashboard/Dashboard';
import MyEMS from './src/components/MyEMS/MyEMS';
import MyTickets from './src/components/MyTickets/MyTickets';
import Updates from './src/components/MyEMS/Updates/Updates';
import SignUp from './src/components/SignUp/SignUp';

import { Dropdown } from 'react-native-material-dropdown';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

//var Login = require('./src/components/Login/Login');
//var Dashboard = required('./src/components/Dashboard/Dashboard');

type Props = {};

export default class App extends Component {

  constructor() {
    super();

    this.renderScene = this.renderScene.bind(this)
  }

  renderScene(route, navigator){
    if(route.name === 'loginPage'){
        return <Login navigator={navigator} />
    } else if(route.name === 'dashboardPage'){
        return <Dashboard navigator={navigator} />
    } else if(route.name === 'emsPage'){
        return <MyEMS navigator={navigator} />
    } else if(route.name === 'ticketsPage'){
        return <MyTickets navigator={navigator} />
    } else if(route.name === 'signupPage'){
          return <SignUp navigator={navigator} />
      }
  }

  render() {
    return (
      /*<View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React jdshfhjsdgfj Native! </Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
      </View>*/
//      <Login />
        <View style={{flex: 1}}>
            <Image style={styles.backImg} source={require('./src/images/header.png')} />
            <NavigationExperimental.Navigator
                initialRoute = {{
                    name: 'loginPage'
                }}
                renderScene = {this.renderScene}
            />
            <Image style={styles.backImg} source={require('./src/images/footer.png')} />
        </View>
    );
  }
}

/*navigatorRenderScene(route,navigator){
    _navigator = navigator;
    switch(route.id){
        case 'Login':
            return(<Login navigator={navigator} title="Login" />);
        case 'Dashboard':
            return(<Dashboard navigator={navigator} title="Dashboard" />);
    }
}*/


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  backImg: {
      alignSelf: 'stretch',
      width: '100%',
      height: 50,
  }
});
