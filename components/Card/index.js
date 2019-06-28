import React from 'react';
import { Root } from './components/Root';
import { Title } from './components/Title';
import { SubTitle } from './components/SubTitle';
import { Text } from './components/Text';
import { Pill } from '../Pill';
import { TouchableOpacity, View } from 'react-native';
import AlarmIcon from '../AlarmIcon';
import { COLORS } from '../../constants/colors';

export const Card = ({ onPress, prescription }) => (
  <TouchableOpacity onPress={onPress}>
    <Root style={{ elevation: 5 }}>
      {prescription.status && <AlarmIcon />}
      <Pill colors={COLORS[prescription.color]} />
      <View>
        <Title>{prescription.name}</Title>
        <SubTitle>{prescription.desc}</SubTitle>
        <Text>Take at: 09:00</Text>
      </View>
    </Root>
  </TouchableOpacity>
);
