import React from 'react';
import { View } from 'react-native';
import { LinearGradient } from 'expo';
import { Row } from './Row';

const Pill = ({ colors }) => {
  const [, color] = colors;
  return (
    <Row
      style={{
        shadowColor: '#000',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        paddingLeft: 0
      }}
    >
      <LinearGradient
        colors={colors}
        locations={[0.5, 0.5]}
        style={{
          width: 25,
          height: 50,
          borderRadius: 100,
          transform: [{ rotate: '-35deg' }]
        }}
      />
      <LinearGradient
        colors={colors}
        locations={[0.5, 0.5]}
        style={{
          width: 15,
          height: 30,
          marginLeft: 20,
          borderRadius: 100,
          transform: [{ rotate: '63deg' }]
        }}
      />
    </Row>
  );
};

export default Pill;
