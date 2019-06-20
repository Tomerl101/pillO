import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {
  createAppContainer,
  createSwitchNavigator,
  SafeAreaView
} from 'react-navigation';

import LoginScreen from './screens/LoginScreen';
import DashboardScreen from './screens/DashboardScreen';
import LoadingScreen from './screens/LoadingScreen';
import PillsDetailsScreen from './screens/PillsDetailsScreen';

import * as firebase from 'firebase';
import { firebaseConfig } from './config';
firebase.initializeApp(firebaseConfig);

export default class App extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <AppNavigator />
      </SafeAreaView>
    );
  }
}

const AppSwitchNavigator = createSwitchNavigator({
  LoadingScreen,
  LoginScreen,
  DashboardScreen,
  PillsDetailsScreen
});

const AppNavigator = createAppContainer(AppSwitchNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fefefe'
  }
});
