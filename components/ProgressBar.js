import React from 'react'
import { View } from 'react-native'
import { Bar } from 'react-native-progress'
import Text from './Texts/Text'
import styles from './style'

const ProgressBar = ({ taken, total }) => {
  return (
    <View>
      <View style={styles.barTextContainerStyle}>
        <Text style={styles.bigFontStyle}>{taken}</Text>
        <Text style={styles.greenColor}>{`/ ${total} dose taken`}</Text>
      </View>
      <View style={styles.leftMargin}>
        <Bar
          progress={taken / total}
          color="white"
          borderWidth={0}
          unfilledColor="#7bedca"
          height={12}
          width={300}
          borderRadius={100}
        />
      </View>
    </View>
  )
}

export default ProgressBar
