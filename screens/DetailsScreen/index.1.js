import React, { Component } from 'react';
import { StyleSheet, ScrollView, View, Image } from 'react-native';
import { inject, observer } from 'mobx-react';
import { Divider } from 'react-native-paper';
import { List } from 'react-native-paper';
import MediumText  from '../../components/Texts/MediumText';
import Card from './components/Card';
import SuccessModal from './components/SuccessModal';
import DetailsTitle from './components/DetailsTitle';
import QR_Button from './components/QR_Button';
import BackButton from './components/BackButton';
import styles from './style'

@inject('store')
@observer
export class DetailsScreen extends Component {
  state = {
    isModalVisible: false,
    scanned: this.props.navigation.getParam('item').taken
  };

  onModalOkPressed = () => {
    this.props.store.setModalVisible(false);
    this.setState({ scanned: true });
  };

  validateQR = QR_payload => {
    const item = this.props.navigation.getParam('item');
    return item.name == QR_payload.name && item.id == QR_payload.id
      ? true
      : false;
  };

  render() {
    const { scanned } = this.state;
    const { navigation } = this.props;
    const item = navigation.getParam('item');

    return (
      <View style={styles.containerStyle}>
        <BackButton />
        <QR_Button scanned={scanned} validateQR={this.validateQR} />
        <Card>
          <DetailsTitle
            title={item.name}
            color={item.taken ? 'GRAY' : item.color}
          />
          <Divider style={styles.marginBottom} />
          <ScrollView>
            <List.Item
              title="First Item"
              description="Item description"
              left={() => (
                <Image
                style={styles.imageStyle}
                  source={require('../../assets/images/pills_img1.jpg')}
                />
              )}
              right={() => (
                <View style={styles.justifyContent}>
                  <MediumText>x2</MediumText>
                </View>
              )}
            />
            <List.Item
              title="Dexamol"
              description="Item description"
              left={props => (
                <Image
                  style={styles.imageStyle}
                  source={require('../../assets/images/pills_img2.jpg')}
                />
              )}
              right={() => (
                <View style={styles.justifyContent}>
                  <MediumText>x5</MediumText>
                </View>
              )}
            />
            <List.Item
              title="Vitamin C"
              description="Item description"
              left={props => (
                <Image
                style={styles.imageStyle}
                  source={require('../../assets/images/pills_img4.jpg')}
                />
              )}
              right={() => (
                <View style={styles.justifyContent}>
                  <MediumText>x3</MediumText>
                </View>
              )}
            />
            <List.Item
              title="Acamol"
              description="Item description"
              left={props => (
                <Image
                  style={styles.imageStyle}
                  source={require('../../assets/images/pills_img6.jpg')}
                />
              )}
              right={() => (
                <View style={styles.justifyContent}>
                  <MediumText>x2</MediumText>
                </View>
              )}
            />

            <List.Item
              title="Vitamin D"
              description="Item description"
              left={props => (
                <Image
                  style={styles.imageStyle}
                  source={require('../../assets/images/pills_img7.jpg')}
                />
              )}
              right={() => (
                <View style={styles.justifyContent}>
                  <MediumText>x3</MediumText>
                </View>
              )}
            />
          </ScrollView>
        </Card>
        <SuccessModal onModalPress={this.onModalOkPressed} />
      </View>
    );
  }
}

export default DetailsScreen;

