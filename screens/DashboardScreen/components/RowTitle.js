import React from 'react';
import { StyleSheet } from 'react-native';
import { Row } from '../../../components/Row';
import { SubTitle } from '../../../components/Texts/SubTitle';

const RowTitle = ({ text, leftIcon, rightIcon }) => {
  return (
    <Row style={styles.rowStyle}>
      <Row style={styles.center}>
        {leftIcon}
        <SubTitle style={styles.textStyle}>{text}</SubTitle>
      </Row>
      {rightIcon}
    </Row>
  );
};

export default RowTitle;

const styles = StyleSheet.create({
  rowStyle: {
    marginHorizontal: 20,
    marginTop: 20,
    justifyContent: 'space-between'
  },
  center: {
    alignItems: 'center'
  },
  textStyle: {
    fontSize: 20,
    marginLeft: 10,
    color: '#2c3e50',
    marginVertical: 0
  }
});
