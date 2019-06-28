import React from 'react';
import { StyleSheet, ActivityIndicator, View } from 'react-native';
import * as firebase from 'firebase';
import { Font } from 'expo';
import { firebaseConfig } from './config';
import { AppNavigator } from './navigation';

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
      <View style={styles.container}>
        <AppNavigator />
      </View>
    ) : (
      <ActivityIndicator size="large" color="#0000ff" />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fefefe'
  }
});
