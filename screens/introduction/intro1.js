import React from 'react'
import { View, Image } from 'react-native'
import Text from '../../components/Texts/Text'
import SubTitle from '../../components/Texts/SubTitle'
import styles from './style'

const Intro1 = () => {
  return (
    <View style={styles.containerStyle}>
      <Image
        resizeMode="contain"
        style={styles.imageStyle}
        source={require('../../assets/images/undraw_time_management_30iu.png')}
      />
      <View style={{ margin: 20 }}>
        <SubTitle style={styles.textStyle}>See Your Pill's Schdule</SubTitle>
        <Text style={styles.textStyle}>
          PillO will remaind you when it is time to take your pill's prescription
        </Text>
      </View>
    </View>
  )
}

export default Intro1
