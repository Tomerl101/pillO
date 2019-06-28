import React from 'react';
import { TouchableOpacity } from 'react-native';
import { EvilIcons, MaterialIcons } from '@expo/vector-icons';
import { RowTitle } from '../../../components/RowTitle';
import moment from 'moment';

export const DateTitle = () => {
  const dateStr = moment().format('dddd MMM D'); // Jun 28th 19
  // Friday

  return (
    <RowTitle
      text={dateStr}
      leftIcon={<EvilIcons name="calendar" size={42} color="#2c3e50" />}
      rightIcon={
        <TouchableOpacity>
          <MaterialIcons name="filter-list" size={28} color="#2c3e50" />
        </TouchableOpacity>
      }
    />
  );
};
