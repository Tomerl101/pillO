import React, { Component } from 'react';
import {
  ActivityIndicator,
  View,
  ScrollView,
  StyleSheet,
  Image,
  Button,
  ListView
} from 'react-native';
import { inject, observer } from 'mobx-react';
import firebase from 'firebase';
import { DashboardHeader } from './components/DashboardHeader';
import { ArticleCard } from '../../components/ArticleCard';
import { DateTitle } from './components/DateTitle';
import { ArticlesTitle } from './components/ArticlesTitle';
import { registerForPushNotificationsAsync } from '../../utils/registerForPushNotificationsAsync';
import PerscriptionList from './components/PerscriptionList';

@inject('store')
@observer
class DashboardScreen extends Component {
  async componentDidMount() {
    const { store } = this.props;
    store.currentUser = await firebase
      .auth()
      .currentUser.displayName.split(' ')[0];
    await registerForPushNotificationsAsync(this.currentUser);
  }

  render() {
    const { filteredPerscription, isLoading } = this.props.store;

    return isLoading ? (
      <ActivityIndicator size="large" color="#0000ff" />
    ) : (
      <View>
        <DashboardHeader />
        {/* <Button title="Sign out" onPress={() => firebase.auth().signOut()} /> */}
        <ScrollView>
          <DateTitle />
          <PerscriptionList data={filteredPerscription} />
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
        </ScrollView>
      </View>
    );
  }
}
export default DashboardScreen;

const styles = StyleSheet.create({
  contentContainer: { marginBottom: 28 }
});
