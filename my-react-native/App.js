import React, {Component} from 'react';
import { StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import {DrawerCustomNavigator} from './Navigators/DrawerCustomNavigator.js';


export default class App extends Component {
  
  render(){

    return (

      <NavigationContainer>
        <DrawerCustomNavigator />
      </NavigationContainer>

    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});