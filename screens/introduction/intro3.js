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
      <View style={styles.margin}>
        <SubTitle style={styles.textStyle}>View History</SubTitle>
        <Text style={styles.textStyle}>
          After PillO verify your consumption, you would be able to see it in your history
        </Text>
      </View>
    </View>
  )
}

export default Intro3
