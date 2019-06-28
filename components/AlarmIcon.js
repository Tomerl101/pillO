import React from 'react';
import { StyleSheet } from 'react-native';
import { DangerZone } from 'expo';
const { Lottie } = DangerZone;

export default class AlarmIcon extends React.Component {
  componentDidMount() {
    this.animation.play();
  }

  render() {
    return (
      <Lottie
        ref={animation => {
          this.animation = animation;
        }}
        style={styles.IconStyle}
        source={require('../assets/Notification_Red.json')}
      />
    );
  }
}

const styles = StyleSheet.create({
  IconStyle: {
    width: 300,
    height: 300,
    position: 'absolute',
    top: -65
  }
});
