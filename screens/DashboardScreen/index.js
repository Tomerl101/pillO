import React, { Component } from 'react'
import { ActivityIndicator, View, ScrollView, Button } from 'react-native'
import { inject, observer } from 'mobx-react'
import firebase from 'firebase'
import DashboardHeader from './components/DashboardHeader'
// import ArticleCard from '../../components/ArticleCard'
import DateTitle from './components/DateTitle'
import ArticlesTitle from './components/ArticlesTitle'
import registerForPushNotificationsAsync from '../../utils/registerForPushNotificationsAsync'
import ArticleList from './components/ArticleList'
import PerscriptionList from './components/PerscriptionList'
import mockArticles from '../../mock/articles.json'
@inject('store')
@observer
class DashboardScreen extends Component {
  async componentDidMount() {
    const { store } = this.props
    store.currentUser = await firebase.auth().currentUser.displayName.split(' ')[0]
    await registerForPushNotificationsAsync(this.currentUser)
  }

  render() {
    const { filteredPerscription, isLoading } = this.props.store

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
          <ArticleList data={mockArticles} />
        </ScrollView>
      </View>
    )
  }
}
export default DashboardScreen
