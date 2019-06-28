import React, { Component } from 'react';
import { View, ScrollView, StyleSheet, Image } from 'react-native';
import firebase from 'firebase';
import { DashboardHeader } from './components/DashboardHeader';
import { ArticleCard } from '../../components/ArticleCard';
import { DateTitle } from './components/DateTitle';
import { ArticlesTitle } from './components/ArticlesTitle';
import { registerForPushNotificationsAsync } from '../../utils/registerForPushNotificationsAsync';
import perscriptionMockData from '../../mock/medicine_perscription.json';
import PerscriptionList from './components/PerscriptionList';

class DashboardScreen extends Component {
  async componentDidMount() {
    this.currentUser = await firebase.auth().currentUser;
    await registerForPushNotificationsAsync(this.currentUser);
  }

  render() {
    return (
      <View>
        <DashboardHeader />
        <ScrollView>
          <DateTitle />
          <PerscriptionList data={perscriptionMockData} />
          <ArticlesTitle />
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
            <ArticleCard style={{ marginBottom: 20 }}>
              <View style={{ width: '100%', height: 150 }}>
                <Image
                  style={{ width: '100%', height: '100%', borderRadius: 20 }}
                  source={require('../../assets/images/article_4.jpg')}
                />
              </View>
            </ArticleCard>
          </ScrollView>
          {/* <Button title="Sign out" onPress={() => firebase.auth().signOut()} /> */}
        </ScrollView>
      </View>
    );
  }
}
export default DashboardScreen;

const styles = StyleSheet.create({
  contentContainer: { marginBottom: 28 }
});
