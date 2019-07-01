import React, { Component } from 'react'
import { View } from 'react-native'
import firebase from 'firebase'
import Swiper from 'react-native-web-swiper'
import Intro1 from './intro1'
import Intro2 from './intro2'
import Intro3 from './intro3'
import LoginScreen from '../LoginScreen'
import styles from './style'

export default class Introduction extends Component {
  state = { isLogin: false }

  componentDidMount() {
    this.checkIfLoggedIn()
  }

  checkIfLoggedIn = () => {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ isLogin: true })
      }
    })
  }

  render() {
    const { isLogin } = this.state
    return (
      <View style={styles.introductionViewStyle}>
        <Swiper>
          <Intro1 />
          <Intro2 />
          <Intro3 />
          <LoginScreen isLogin={isLogin} navigation={this.props.navigation} />
        </Swiper>
      </View>
    )
  }
}
