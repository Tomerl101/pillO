import React, { Component } from 'react';
import { View, ScrollView, StyleSheet, Button, Image } from 'react-native';
import { Permissions, Notifications } from 'expo';
import { Ionicons, EvilIcons, MaterialIcons } from '@expo/vector-icons';
import firebase from 'firebase';
import { Card } from '../../components/Card';
import Pill from '../../components/Pill';
import DashboardHeader from '../../components/DashboardHeader';
import { ArticleCard } from '../../components/ArticleCard';
import RowTitle from './components/RowTitle';

class DashboardScreen extends Component {
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
  }

  onCardPress = () => {
    this.props.navigation.navigate('PillsDetailsScreen');
  };

  render() {
    return (
      <View>
        <DashboardHeader />
        <RowTitle
          text={'Sunday Jun 17'}
          leftIcon={<EvilIcons name="calendar" size={42} color="#2c3e50" />}
          rightIcon={
            <MaterialIcons name="filter-list" size={28} color="#2c3e50" />
          }
        />

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.contentContainer}
        >
          <Card>
            <Pill colors={['#FFB692', '#EA5455']} />
          </Card>
          <Card>
            <Pill colors={['#FFEB71', '#F8D800']} />
          </Card>
          <Card>
            <Pill colors={['#AABCFF', '#0396FF']} />
          </Card>
          <Card>
            <Pill colors={['#8FFBB8', '#28C76F']} />
          </Card>
        </ScrollView>

        <RowTitle
          text={'Recommend Articels'}
          leftIcon={<Ionicons name="md-paper" size={32} color="#2c3e50" />}
        />
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.contentContainer}
        >
          <ArticleCard>
            <View style={{ width: '100%', height: 150 }}>
              <Image
                style={{ width: '100%', height: '100%', borderRadius: 20 }}
                source={require('../../assets/images/article_1.jpg')}
              />
            </View>
          </ArticleCard>

          <ArticleCard>
            <View style={{ width: '100%', height: 150 }}>
              <Image
                style={{ width: '100%', height: '100%', borderRadius: 20 }}
                source={require('../../assets/images/article_3.jpg')}
              />
            </View>
          </ArticleCard>
          <ArticleCard>
            <View style={{ width: '100%', height: 150 }}>
              <Image
                style={{ width: '100%', height: '100%', borderRadius: 20 }}
                source={require('../../assets/images/article_4.jpg')}
              />
            </View>
          </ArticleCard>
        </ScrollView>
        {/* <Button title="Sign out" onPress={() => firebase.auth().signOut()} /> */}
      </View>
    );
  }
}
export default DashboardScreen;

const styles = StyleSheet.create({
  contentContainer: { marginBottom: 28 }
});
