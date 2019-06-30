import React from 'react'
import { View, Image } from 'react-native'
import Text from '../../components/Texts/Text'
import SubTitle from '../../components/Texts/SubTitle'
import styles from './style'

const Intro3 = () => {
  return (
    <View style={styles.containerStyle}>
      <Image
        resizeMode="contain"
        style={styles.imageStyle}
        source={require('../../assets/images/undraw_order_confirmed_1m3v.png')}
      />
      <View style={{ margin: 20 }}>
        <SubTitle style={styles.textStyle}>See Your Pill's Schdule</SubTitle>
        <Text style={styles.textStyle}>
          Lots of patients tend to forget about taking medication ..
        </Text>
      </View>
    </View>
  )
}

export default Intro3
