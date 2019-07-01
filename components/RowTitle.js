import React from 'react'
import styles from './style'
import Row from './Row'
import SubTitle from './Texts/SubTitle'

const RowTitle = ({ text, leftIcon, rightIcon }) => {
  return (
    <Row style={styles.rowTitleStyle}>
      <Row style={styles.center}>
        {leftIcon}
        <SubTitle style={styles.textStyle}>{text}</SubTitle>
      </Row>
      {rightIcon}
    </Row>
  )
}

export default RowTitle
