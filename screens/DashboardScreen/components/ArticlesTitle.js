import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import RowTitle from '../../../components/RowTitle'
import styles from './styles'

const ArticlesTitle = () => {
  return (
    <View style={styles.marginLeft}>
      <RowTitle
        text="Recommend Articels"
        leftIcon={<Ionicons name="md-paper" size={32} style={styles.marginRight} color="#2c3e50" />}
      />
    </View>
  )
}

export default ArticlesTitle
