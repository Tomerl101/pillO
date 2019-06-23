import React, { Component } from 'react';
import { StyleSheet, ScrollView, View, Image } from 'react-native';
import QR_Button from './components/QR_Button';
import DetailsTitle from './components/DetailsTitle';
import { Card } from './components/Card';
import { Divider } from 'react-native-paper';
import BackButton from './components/BackButton';
import { List } from 'react-native-paper';
import { MediumText } from '../../components/Texts/MediumText';

export class DetailsScreen extends Component {
  render() {
    return (
      <View style={styles.containerStyle}>
        <BackButton />
        <QR_Button />
        <Card>
          <DetailsTitle />
          <Divider style={{ marginBottom: 15 }} />
          <ScrollView>
            <List.Item
              title="First Item"
              description="Item description"
              left={props => (
                <Image
                  style={{
                    width: 55,
                    height: 55,
                    borderRadius: 10,
                    marginRight: 10
                  }}
                  source={require('../../assets/images/pills_img1.jpg')}
                />
              )}
              right={() => (
                <View style={{ justifyContent: 'center' }}>
                  <MediumText>x2</MediumText>
                </View>
              )}
            />
            <List.Item
              title="First Item"
              description="Item description"
              left={props => (
                <Image
                  style={{
                    width: 55,
                    height: 55,
                    borderRadius: 10,
                    marginRight: 10
                  }}
                  source={require('../../assets/images/pills_img2.jpg')}
                />
              )}
              right={() => (
                <View style={{ justifyContent: 'center' }}>
                  <MediumText>x5</MediumText>
                </View>
              )}
            />
            <List.Item
              title="First Item"
              description="Item description"
              left={props => (
                <Image
                  style={{
                    width: 55,
                    height: 55,
                    borderRadius: 10,
                    marginRight: 10
                  }}
                  source={require('../../assets/images/pills_img4.jpg')}
                />
              )}
              right={() => (
                <View style={{ justifyContent: 'center' }}>
                  <MediumText>x3</MediumText>
                </View>
              )}
            />
            <List.Item
              title="First Item"
              description="Item description"
              left={props => (
                <Image
                  style={{
                    width: 55,
                    height: 55,
                    borderRadius: 10,
                    marginRight: 10
                  }}
                  source={require('../../assets/images/pills_img6.jpg')}
                />
              )}
              right={() => (
                <View style={{ justifyContent: 'center' }}>
                  <MediumText>x2</MediumText>
                </View>
              )}
            />

            <List.Item
              title="First Item"
              description="Item description"
              left={props => (
                <Image
                  style={{
                    width: 55,
                    height: 55,
                    borderRadius: 10,
                    marginRight: 10
                  }}
                  source={require('../../assets/images/pills_img7.jpg')}
                />
              )}
              right={() => (
                <View style={{ justifyContent: 'center' }}>
                  <MediumText>x3</MediumText>
                </View>
              )}
            />
          </ScrollView>
        </Card>
      </View>
    );
  }
}

export default DetailsScreen;

const styles = StyleSheet.create({
  containerStyle: {
    paddingHorizontal: 35,
    flex: 1
  }
});
