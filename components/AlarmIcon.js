import React from 'react'
import styles from './style'
import { DangerZone } from 'expo'
const { Lottie } = DangerZone

export default class AlarmIcon extends React.Component {
  componentDidMount() {
    this.animation.play()
  }

  render() {
    return (
      <Lottie
        ref={animation => {
          this.animation = animation
        }}
        style={styles.IconStyle}
        source={require('../assets/Notification_Red.json')}
      />
    )
  }
}
