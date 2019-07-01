import React from 'react'
import { View, Image } from 'react-native'
import Text from '../../components/Texts/Text'
import SubTitle from '../../components/Texts/SubTitle'
import styles from './style'

const Intro2 = () => {
  return (
    <View style={styles.containerStyle}>
      <Image
        resizeMode="contain"
        style={styles.imageStyle}
        source={require('../../assets/images/undraw_camera_mg5h.png')}
      />
      <View style={styles.margin}>
        <SubTitle style={styles.textStyle}>Scan Your QR Code</SubTitle>
        <Text style={styles.textStyle}>
          Scanning the QR code will take you one step forward to make sure you take your pills
        </Text>
      </View>
    </View>
  )
}

export default Intro2
