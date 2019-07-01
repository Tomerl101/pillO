import React from 'react'
import { View, Image } from 'react-native'
import { inject, observer } from 'mobx-react'
import Modal from 'react-native-modal'
import Text from '../../../components/Texts/Text'
import Button from '../../../components/Button'
import MediumText from '../../../components/Texts/MediumText'
import styles from './style'
const SuccessModal = inject('store')(
  observer(({ store, onModalPress }) => {
    const { isModalVisible } = store

    return (
      <Modal isVisible={isModalVisible}>
        <View style={styles.modalBodyStyle}>
          <MediumText style={styles.headerText}>
            {`Cocktail Was
            Successfuly scanned`}
          </MediumText>
          <Image
            style={styles.successImageStyle}
            source={require('../../../assets/images/success.png')}
          />
          <Button onPress={onModalPress}>
            <Text>GOT IT!</Text>
          </Button>
        </View>
      </Modal>
    )
  })
)

export default SuccessModal
