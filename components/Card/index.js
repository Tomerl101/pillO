import React from 'react';
import { Root } from './components/Root';
import { Title } from './components/Title';
import { SubTitle } from './components/SubTitle';
import { Text } from './components/Text';
import { TouchableOpacity } from 'react-native';

export const Card = props => (
  <TouchableOpacity onPress={props.onPress}>
    <Root>
      <Title>Cocktail 1</Title>
      <SubTitle>Take after lunch</SubTitle>
      <Text>Take at: 09:00</Text>
    </Root>
  </TouchableOpacity>
);
