import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { Permissions, Notifications } from 'expo';
import firebase from 'firebase';

class DashboardScreen extends Component {
  registerForPushNotificationsAsync = async () => {
    console.log('30303030');
    const { status: existingStatus } = await Permissions.getAsync(
      Permissions.NOTIFICATIONS
    );
    console.log('40404040');

    let finalStatus = existingStatus;

    // only ask if permissions have not already been determined, because
    // iOS won't necessarily prompt the user a second time.
    if (existingStatus !== 'granted') {
      // Android remote notification permissions are granted during the app
      // install, so this will only ask on iOS
      const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
      finalStatus = status;
    }
    console.log('50505050');

    // Stop here if the user did not grant permissions
    if (finalStatus !== 'granted') {
      console.log('000000');
      return;
    }
    console.log('60606060');

    try {
      console.log('777777');
      // Get the token that uniquely identifies this device
      let token = await Notifications.getExpoPushTokenAsync();

      // POST the token to your backend server from where you can retrieve it to send push notifications.
      firebase
        .database()
        .ref('users' + this.currentUser.uid + '/push_token')
        .set(token);
    } catch (error) {
      console.log('888888');

      console.log(error);
    }
  };

  async componentDidMount() {
    console.log('10101010');
    this.currentUser = await firebase.auth().currentUser;
    console.log('20202020');

    await this.registerForPushNotificationsAsync();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>DashboardScreen</Text>
        <Button title="Sign out" onPress={() => firebase.auth().signOut()} />
      </View>
    );
  }
}
export default DashboardScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
