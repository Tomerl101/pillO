import React from 'react'
import { View, Image } from 'react-native'
import { LinearGradient } from 'expo'
import { inject, observer } from 'mobx-react'
import Title from '../../../components/Texts/Title'
import SubTitle from '../../../components/Texts/SubTitle'
import ProgressBar from '../../../components/ProgressBar'
import styles from './styles'

const DashboardHeader = inject('store')(
  observer(({ store }) => {
    const taken = store.takenPerscriptionsCount
    const total = store.totalPerscriptionCount

    return (
      <View style={styles.container}>
        <LinearGradient colors={['#6BEBC3', '#69E7C0', '#5ED1AE']} style={styles.colorView}>
          <Image style={styles.pillStyle} source={require('../../../assets/images/pills.png')} />
          <Title>{`Hi ${store.currentUser}`}</Title>
          <SubTitle>It's time for a pill</SubTitle>
          <ProgressBar taken={taken} total={total} />
        </LinearGradient>
      </View>
    )
  })
)

export default DashboardHeader
