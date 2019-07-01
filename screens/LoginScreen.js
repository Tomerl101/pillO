import React, { Component } from 'react'
import { View, Image } from 'react-native'
import firebase from 'firebase'
import { config } from '../config'
import styles from './introduction/style'
import Text from '../components/Texts/Text'
import SubTitle from '../components/Texts/SubTitle'
import Button from '../components/Button'

class LoginScreen extends Component {
  isUserEqual = (googleUser, firebaseUser) => {
    if (firebaseUser) {
      const providerData = firebaseUser.providerData
      for (let i = 0; i < providerData.length; i++) {
        if (
          providerData[i].providerId === firebase.auth.GoogleAuthProvider.PROVIDER_ID &&
          providerData[i].uid === googleUser.getBasicProfile().getId()
        ) {
          // We don't need to reauth the Firebase connection.
          return true
        }
      }
    }
    return false
  }
  onSignIn = googleUser => {
    console.log('Google Auth Response', googleUser)
    // We need to register an Observer on Firebase Auth to make sure auth is initialized.
    const unsubscribe = firebase.auth().onAuthStateChanged(
      function(firebaseUser) {
        unsubscribe()
        // Check if we are already signed-in Firebase with the correct user.
        if (!this.isUserEqual(googleUser, firebaseUser)) {
          // Build Firebase credential with the Google ID token.
          const credential = firebase.auth.GoogleAuthProvider.credential(
            googleUser.idToken,
            googleUser.accessToken
          )

          // Sign in with credential from the Google user.
          firebase
            .auth()
            .signInWithCredential(credential)
            .then(function(result) {
              console.log('user signed in ')

              if (result.additionalUserInfo.isNewUser) {
                firebase
                  .database()
                  .ref('/users/' + result.user.uid)
                  .set({
                    gmail: result.user.email,
                    profile_picture: result.additionalUserInfo.profile.picture,
                    first_name: result.additionalUserInfo.profile.given_name,
                    last_name: result.additionalUserInfo.profile.family_name,
                    created_at: Date.now()
                  })
                  .then(function(snapshot) {
                    // console.log('Snapshot', snapshot);
                  })
              } else {
                firebase
                  .database()
                  .ref('/users/' + result.user.uid)
                  .update({
                    last_logged_in: Date.now()
                  })
              }
            })
            .catch(function(error) {
              console.log(error.message)
            })
        } else {
          console.log('User already signed-in Firebase.')
        }
      }.bind(this)
    )
  }

  signInWithGoogleAsync = async () => {
    try {
      if (this.props.isLogin) {
        this.props.navigation.navigate('DashboardScreen')
        return
      }
      const result = await Expo.Google.logInAsync({
        androidClientId: config.androidClientId,
        behavior: 'web',
        iosClientId: config.iosClientId, //enter ios client id
        scopes: ['profile', 'email']
      })

      if (result.type === 'success') {
        this.onSignIn(result)
        return result.accessToken
      }
      return { cancelled: true }
    } catch (e) {
      return { error: true }
    }
  }

  render() {
    return (
      <View style={[styles.containerStyle, styles.marginTop]}>
        <Image
          resizeMode="contain"
          style={styles.imageStyle}
          source={require('../assets/images/undraw_having_fun_iais.png')}
        />
        <View style={{ margin: 20 }}>
          <SubTitle style={styles.textStyle}>Sounds Good ?</SubTitle>
          <Text style={styles.textStyle}>
            To get start sign in with your Health maintenance organization account
          </Text>
        </View>
        <View style={{ textAlign: 'center', alignItems: 'center', padding: 30 }}>
          <Button title="Get Started !" onPress={this.signInWithGoogleAsync}>
            <Text>JOIN NOW!</Text>
          </Button>
        </View>
      </View>
    )
  }
}
export default LoginScreen

/** NOTE ***********************************************************************
 * if from intro screen i want to reset the stack navigation use the code below
 * (current behavior is that we can swipe back from dashboard screen)
 *
import { StackActions, NavigationActions } from 'react-navigation'

this.props.navigation.dispatch(
  StackActions.reset({
    index: 0,
    actions: [
      NavigationActions.navigate({ routeName: "DashboardScreen" })
    ]
  })
);
*/
