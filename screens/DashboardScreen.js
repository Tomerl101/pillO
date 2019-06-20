import React, { Component } from 'react';
import { View, ScrollView, StyleSheet, Button } from 'react-native';
import { Permissions, Notifications, Font } from 'expo';
import firebase from 'firebase';
import { Card } from '../components/Card';
import { Title } from '../components/Texts/Title';
import { SubTitle } from '../components/Texts/SubTitle';
import { Text } from '../components/Texts/Text';

class DashboardScreen extends Component {
  state = {
    fontLoaded: false
  };

  registerForPushNotificationsAsync = async () => {
    const { status: existingStatus } = await Permissions.getAsync(
      Permissions.NOTIFICATIONS
    );

    let finalStatus = existingStatus;

    // only ask if permissions have not already been determined, because
    // iOS won't necessarily prompt the user a second time.
    if (existingStatus !== 'granted') {
      // Android remote notification permissions are granted during the app
      // install, so this will only ask on iOS
      const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
      finalStatus = status;
    }

    // Stop here if the user did not grant permissions
    if (finalStatus !== 'granted') {
      return;
    }

    try {
      // Get the token that uniquely identifies this device
      let token = await Notifications.getExpoPushTokenAsync();

      // POST the token to your backend server from where you can retrieve it to send push notifications.
      firebase
        .database()
        .ref('users/' + this.currentUser.uid + '/push_token')
        .set(token);
    } catch (error) {
      console.log(error);
    }
  };

  async componentDidMount() {
    this.currentUser = await firebase.auth().currentUser;
    await this.registerForPushNotificationsAsync();
    await Font.loadAsync({
      'OpenSans-Bold': require('../assets/fonts/OpenSans-Bold.ttf'),
      OpenSans: require('../assets/fonts/OpenSans-Regular.ttf'),
      'OpenSans-Semi': require('../assets/fonts/OpenSans-SemiBold.ttf'),
      'Raleway-Bold': require('../assets/fonts/Raleway-Bold.ttf'),
      'Raleway-SemiBold': require('../assets/fonts/Raleway-SemiBold.ttf'),
      'Raleway-Light': require('../assets/fonts/Raleway-Light.ttf'),
      'Raleway-Regular': require('../assets/fonts/Raleway-Regular.ttf')
    });
    this.setState({ fontLoaded: true });
  }

  onCardPress = () => {
    this.props.navigation.navigate('PillsDetailsScreen');
  };

  render() {
    return this.state.fontLoaded ? (
      <View style={styles.container} onPress={this.onCardPress}>
        <View style={styles.colorView}>
          <Title>Hi Noa 💊</Title>
          <SubTitle>This is Sub Title</SubTitle>
          <Text style={{ color: '#1E6B53' }}>Total dose taken 3/7</Text>
        </View>
        <Text style={{ marginLeft: 30, marginTop: 20, color: '#10EEAA' }}>
          Sunday Jun 17
        </Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.contentContainer}
        >
          <Card onPress={this.onCardPress} />
          <Card />
          <Card />
          <Card />
          <Card />
        </ScrollView>
        <Button title="Sign out" onPress={() => firebase.auth().signOut()} />
      </View>
    ) : null;
  }
}
export default DashboardScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end'
  },
  colorView: {
    backgroundColor: '#5ED1AE',
    padding: 30,
    marginBottom: 40,
    height: 260,
    borderBottomLeftRadius: 90,
    shadowColor: '#5ED1AE',
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 10,
    elevation: 1
  }
});
