import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Title } from './Texts/Title';
import { SubTitle } from './Texts/SubTitle';
import { Text } from './Texts/Text';
import { Bar } from 'react-native-progress';
import { LinearGradient } from 'expo';

const DashboardHeader = () => {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#6BEBC3', '#69E7C0', '#5ED1AE']}
        style={styles.colorView}
      >
        <Image
          style={styles.pillStyle}
          source={require('../assets/images/pills.png')}
        />
        <Title>Hi Noa</Title>
        <SubTitle>It's time for a pill</SubTitle>
        <View style={styles.barTitleStyle}>
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
      </LinearGradient>
    </View>
  );
};

export default DashboardHeader;

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
    padding: 30,
    marginBottom: 20,
    height: 240,
    borderBottomLeftRadius: 80
  },
  pillStyle: {
    width: 150,
    height: 150,
    position: 'absolute',
    right: 0,
    marginTop: 45
  },
  barTitleStyle: {
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
