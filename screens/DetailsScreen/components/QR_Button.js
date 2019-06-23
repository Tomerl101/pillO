import React, { Component } from 'react';
import { View, TouchableOpacity, StyleSheet, Button } from 'react-native';
import { Permissions } from 'expo';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { SmallText } from '../../../components/Texts/SmallText';

export default class QR_Button extends Component {
  state = {
    hasCameraPermission: null,
    scanned: false,
    QRVisible: true
  };

  async componentDidMount() {
    const {
      status: cameraPermission,
      permissions
    } = await Permissions.askAsync(Permissions.CAMERA);
    console.log('status->', cameraPermission);
    console.log('permissions->', permissions);
    this.setState({ hasCameraPermission: cameraPermission === 'granted' });
  }

  onPress = () => {
    this.setState({ QRVisible: false });
  };

  render() {
    const { hasCameraPermission, scanned, QRVisible } = this.state;
    //TODO: add modal/ alert and ask for camera permission if not granted
    return (
      <View
        style={{
          height: 180,
          margin: 20,
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        {QRVisible ? (
          <TouchableOpacity onPress={this.onPress}>
            <MaterialCommunityIcons
              name="qrcode-scan"
              size={108}
              color="#2c3e50"
            />
          </TouchableOpacity>
        ) : (
          <View style={{ height: 110, width: 110, borderRadius: 10 }}>
            <BarCodeScanner
              onBarCodeScanned={scanned ? undefined : this.handleBarCodeScanned}
              style={{ ...StyleSheet.absoluteFillObject, borderRadius: 10 }}
            />

            <Button
              title={'Tap to Scan Again'}
              onPress={() => this.setState({ scanned: false, QRVisible: true })}
            />
          </View>
        )}
        <SmallText style={{ marginTop: 25 }}>{`Scan the QR of your medicine
      to verify consumption`}</SmallText>
      </View>
    );
  }
  handleBarCodeScanned = ({ type, data }) => {
    this.setState({ scanned: true });
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
  };
}
