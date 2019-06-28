import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { LinearGradient } from 'expo';
import { Title } from '../../../components/Texts/Title';
import { SubTitle } from '../../../components/Texts/SubTitle';
import { ProgressBar } from '../../../components/ProgressBar';

export const DashboardHeader = () => {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#6BEBC3', '#69E7C0', '#5ED1AE']}
        style={styles.colorView}
      >
        <Image
          style={styles.pillStyle}
          source={require('../../../assets/images/pills.png')}
        />
        <Title>Hi Noa</Title>
        <SubTitle>It's time for a pill</SubTitle>
        <ProgressBar />
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderBottomLeftRadius: 80,
    shadowColor: '#5ED1AE',
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 10,
    elevation: 3
  },
  colorView: {
    paddingTop: 60,
    paddingHorizontal: 30,
    marginBottom: 20,
    height: 265,
    borderBottomLeftRadius: 80
  },
  pillStyle: {
    width: 150,
    height: 150,
    position: 'absolute',
    right: 0,
    top: 65
  }
});
