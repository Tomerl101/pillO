import React from 'react'
import { View } from 'react-native'
import Row from '../../../components/Row'
import Pill from '../../../components/Pill'
import Title from '../../../components/Texts/Title'
import MediumText from '../../../components/Texts/MediumText'
import COLORS from '../../../constants/colors'
import styles from './style'

const DetailsTitle = ({ title, color }) => {
  return (
    <Row style={styles.containerStyles}>
      <Pill colors={COLORS[color]} />
      <View style={styles.centerStyle}>
        <Title style={styles.darkBlueColor}>{title}</Title>
        <MediumText style={styles.darkBlueColor}>A smart sub title here</MediumText>
      </View>
    </Row>
  )
}

export default DetailsTitle
