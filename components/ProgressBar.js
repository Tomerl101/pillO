import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Bar } from 'react-native-progress';
import { Text } from './Texts/Text';

export const ProgressBar = () => {
  return (
    <View>
      <View style={styles.barTextContainerStyle}>
        <Text style={styles.bigFontStyle}>03</Text>
        <Text style={styles.greenColor}>/ 10 dose taken</Text>
      </View>
      <View style={styles.leftMargin}>
        <Bar
          progress={0.3}
          color="white"
          borderWidth={0}
          unfilledColor="#7bedca"
          height={12}
          width={300}
          borderRadius={100}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  barTextContainerStyle: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginLeft: 38,
    marginTop: 8,
    marginBottom: 12
  },
  bigFontStyle: {
    fontSize: 28
  },
  greenColor: {
    color: '#1E6B53'
  },
  leftMargin: {
    marginLeft: 42
  }
});
