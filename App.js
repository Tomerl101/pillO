import React from 'react';
import { StyleSheet, ActivityIndicator, Text, View } from 'react-native';
import {
  createAppContainer,
  createSwitchNavigator,
  SafeAreaView
} from 'react-navigation';
import { Font } from 'expo';

import LoginScreen from './screens/LoginScreen';
import DashboardScreen from './screens/DashboardScreen';
import LoadingScreen from './screens/LoadingScreen';
import DetailsScreen from './screens/DetailsScreen';

import * as firebase from 'firebase';
import { firebaseConfig } from './config';
firebase.initializeApp(firebaseConfig);

export default class App extends React.Component {
  state = {
    fontLoaded: false
  };
  async componentDidMount() {
    await Font.loadAsync({
      'OpenSans-Bold': require('./assets/fonts/OpenSans-Bold.ttf'),
      OpenSans: require('./assets/fonts/OpenSans-Regular.ttf'),
      'OpenSans-Semi': require('./assets/fonts/OpenSans-SemiBold.ttf'),
      'Raleway-Bold': require('./assets/fonts/Raleway-Bold.ttf'),
      'Raleway-SemiBold': require('./assets/fonts/Raleway-SemiBold.ttf'),
      'Raleway-Light': require('./assets/fonts/Raleway-Light.ttf'),
      'Raleway-Regular': require('./assets/fonts/Raleway-Regular.ttf')
    });
    this.setState({ fontLoaded: true });
  }

  render() {
    return this.state.fontLoaded ? (
      <SafeAreaView style={styles.container}>
        <AppNavigator />
      </SafeAreaView>
    ) : (
      <ActivityIndicator size="large" color="#0000ff" />
    );
  }
}

const AppSwitchNavigator = createSwitchNavigator({
  LoadingScreen,
  LoginScreen,
  DashboardScreen,
  DetailsScreen
});

const AppNavigator = createAppContainer(AppSwitchNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fefefe'
  }
});
