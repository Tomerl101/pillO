import React from 'react'
import { TouchableOpacity } from 'react-native'
import { inject, observer } from 'mobx-react'
import { EvilIcons, MaterialIcons } from '@expo/vector-icons'
import RowTitle from '../../../components/RowTitle'
import TODO_FILTER from '../../../constants/todoFilter'
import moment from 'moment'

const DateTitle = inject('store')(
  observer(({ store }) => {
    let i = 1
    const filters = Object.keys(TODO_FILTER)
    const dateStr = moment().format('dddd MMM D')

    const cycleFilterMode = () => {
      i++
      store.setFilter(filters[i % filters.length])
    }
    return (
      <RowTitle
        text={dateStr}
        leftIcon={<EvilIcons name="calendar" size={42} color="#2c3e50" />}
        rightIcon={
          <TouchableOpacity onPress={cycleFilterMode}>
            <MaterialIcons name="filter-list" size={28} color="#2c3e50" />
          </TouchableOpacity>
        }
      />
    )
  })
)

export default DateTitle
