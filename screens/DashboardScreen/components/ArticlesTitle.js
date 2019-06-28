import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { RowTitle } from '../../../components/RowTitle';

export const ArticlesTitle = () => {
  return (
    <RowTitle
      text="Recommend Articels"
      leftIcon={
        <Ionicons
          name="md-paper"
          size={32}
          style={{ marginRight: 8 }}
          color="#2c3e50"
        />
      }
    />
  );
};
