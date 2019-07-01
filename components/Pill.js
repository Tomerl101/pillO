import React from 'react'
import { LinearGradient } from 'expo'
import Row from './Row'
import styles from './style'

const Pill = ({ colors }) => {
  return (
    <Row style={styles.rowStyle}>
      <LinearGradient
        colors={colors}
        locations={[0.5, 0.5]}
        style={[styles.pillStyle, styles.bigPillStyle]}
      />
      <LinearGradient
        colors={colors}
        locations={[0.5, 0.5]}
        style={[styles.pillStyle, styles.smallPillStyle]}
      />
    </Row>
  )
}

export default Pill
