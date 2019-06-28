import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import Modal from 'react-native-modal';
import { Text } from '../../../components/Texts/Text';
import { Button } from '../../../components/Button';
import { MediumText } from '../../../components/Texts/MediumText';

export const SuccessModal = props => {
  const { isVisible, onPressToggleModal } = props;
  return (
    <Modal isVisible={isVisible}>
      <View style={styles.modalBodyStyle}>
        <MediumText style={styles.headerText}>
          {`Cocktail A
Was successfuly scanned`}
        </MediumText>
        <Image
          style={styles.successImageStyle}
          source={require('../../../assets/images/success.png')}
        />
        <Button onPress={onPressToggleModal}>
          <Text>GOT IT!</Text>
        </Button>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalBodyStyle: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 30,
    borderColor: 'rgba(0, 0, 0, 0.1)'
  },
  headerText: {
    textAlign: 'center',
    fontSize: 24,
    fontFamily: 'Raleway-SemiBold'
  },
  successImageStyle: {
    width: '100%',
    height: 260
  }
});
