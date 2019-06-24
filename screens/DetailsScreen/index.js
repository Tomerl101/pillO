import React, { Component } from 'react';
import { StyleSheet, ScrollView, View, Image } from 'react-native';
import QR_Button from './components/QR_Button';
import DetailsTitle from './components/DetailsTitle';
import { Card } from './components/Card';
import { Divider } from 'react-native-paper';
import BackButton from './components/BackButton';
import { List } from 'react-native-paper';
import { MediumText } from '../../components/Texts/MediumText';
import Modal from 'react-native-modal';
import { Text } from '../../components/Texts/Text';
import { Button } from '../../components/Button';
export class DetailsScreen extends Component {
  state = {
    isModalVisible: false
  };

  toggleModal = () => {
    this.setState(prevState => ({
      isModalVisible: !prevState.isModalVisible
    }));
  };

  render() {
    const { isModalVisible } = this.state;
    return (
      <View style={styles.containerStyle}>
        <BackButton />
        <QR_Button toggleModal={this.toggleModal} />
        <Card>
          <DetailsTitle />
          <Divider style={{ marginBottom: 25 }} />
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
        <Modal
          isVisible={isModalVisible}
          onSwipeComplete={this.toggleModal}
          swipeDirection="left"
        >
          <View
            style={{
              backgroundColor: 'white',
              borderRadius: 8,
              padding: 30,
              borderColor: 'rgba(0, 0, 0, 0.1)'
            }}
          >
            <MediumText
              style={{
                textAlign: 'center',
                fontSize: 24,
                fontFamily: 'Raleway-SemiBold'
              }}
            >
              {`Cocktail A
Was successfuly scanned`}
            </MediumText>
            <Image
              style={{ width: '100%', height: 260 }}
              source={require('../../assets/images/success.png')}
            />
            <Button onPress={this.toggleModal}>
              <Text>GOT IT!</Text>
            </Button>
          </View>
        </Modal>
      </View>
    );
  }
}

export default DetailsScreen;

const styles = StyleSheet.create({
  containerStyle: {
    paddingTop: 45,
    paddingHorizontal: 35,
    flex: 1
  }
});
