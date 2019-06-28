import React from 'react';
import { StyleSheet } from 'react-native';
import { LinearGradient } from 'expo';
import { Row } from './Row';

export const Pill = ({ colors }) => {
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
  );
};

const styles = StyleSheet.create({
  rowStyle: {
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    paddingLeft: 0
  },
  pillStyle: {
    marginLeft: 20,
    borderRadius: 100,
    borderWidth: 4,
    borderColor: '#fff'
  },
  smallPillStyle: {
    width: 25,
    height: 50,
    transform: [{ rotate: '63deg' }]
  },
  bigPillStyle: {
    width: 35,
    height: 70,
    marginRight: -8,
    transform: [{ rotate: '-35deg' }]
  }
});
