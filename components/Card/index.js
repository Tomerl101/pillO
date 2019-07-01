import React from 'react'
import { TouchableOpacity, View } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import moment from 'moment'
import Root from './components/Root'
import Title from './components/Title'
import SubTitle from './components/SubTitle'
import Text from './components/Text'
import Pill from '../Pill'
import AlarmIcon from '../AlarmIcon'
import COLORS from '../../constants/colors'

const Card = ({ onPress, prescription }) => (
  <TouchableOpacity onPress={onPress}>
    <Root style={{ elevation: 5 }}>
      {isDatePassed(prescription.timeToTake) && !prescription.taken && <AlarmIcon />}
      <Pill colors={COLORS[prescription.taken ? 'GRAY' : prescription.color]} />
      <View>
        <Title>{prescription.name}</Title>
        <SubTitle>{prescription.desc}</SubTitle>

        <Text>
          {prescription.taken ? (
            <Text>
              <MaterialCommunityIcons
                name="checkbox-marked-circle-outline"
                size={22}
                style={{ marginRight: 8 }}
                color="#00e6b8"
              />
              {'Taken '}
            </Text>
          ) : (
            `Take at: ${prescription.time}`
          )}
        </Text>
      </View>
    </Root>
  </TouchableOpacity>
)

export default Card
const isDatePassed = date => moment().isAfter(moment.unix(date))
