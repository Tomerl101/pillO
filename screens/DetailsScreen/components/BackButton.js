import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { withNavigation } from 'react-navigation';

class BackButton extends Component {
  onBackPress = () => {
    this.props.navigation.navigate('DashboardScreen');
  };

  render() {
    return (
      <TouchableOpacity
        style={styles.containerStyle}
        onPress={this.onBackPress}
      >
        <Ionicons name="ios-arrow-back" size={34} color="#2c3e50" />
      </TouchableOpacity>
    );
  }
}

export default withNavigation(BackButton);

const styles = StyleSheet.create({
  containerStyle: {
    width: 30,
    height: 30,
    position: 'absolute',
    top: 65,
    left: 25,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
