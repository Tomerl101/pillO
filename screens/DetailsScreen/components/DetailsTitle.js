import React from 'react';
import { View } from 'react-native';
import { Row } from '../../../components/Row';
import { Pill } from '../../../components/Pill';
import { Title } from '../../../components/Texts/Title';
import { MediumText } from '../../../components/Texts/MediumText';
import { COLORS } from '../../../constants/colors';

const DetailsTitle = ({ title, color }) => {
  return (
    <Row style={{ justifyContent: 'space-between', marginBottom: 25 }}>
      <Pill colors={COLORS[color]} />
      <View style={{ alignItems: 'center' }}>
        <Title style={{ color: '#2c3e50' }}>{title}</Title>
        <MediumText style={{ color: '#2c3e50' }}>
          A smart sub title here
        </MediumText>
      </View>
    </Row>
  );
};

export default DetailsTitle;
