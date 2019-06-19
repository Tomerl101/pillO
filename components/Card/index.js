import React from 'react';
import { Root } from './components/Root';
import { Title } from './components/Title';
import { SubTitle } from './components/SubTitle';
import { Text } from './components/Text';

export const Card = props => (
  <Root>
    <Title>COCKTAIL</Title>
    <SubTitle>Take after lunch</SubTitle>
    <Text>Take at: 09:00</Text>
  </Root>
);
