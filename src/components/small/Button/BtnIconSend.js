import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {ISend, ISendActive} from '../../../assets';
import {colors, fonts} from '../../../utils';

const BtnIconSend = ({disable}) => {
  return (
    <View style={styles.container(disable)}>
      {disable && <ISend></ISend>}
      {!disable && <ISendActive></ISendActive>}
    </View>
  );
};

export default BtnIconSend;

const styles = StyleSheet.create({
  container: disable => ({
    backgroundColor: disable ? colors.disable : colors.primary,
    width: 45,
    height: 45,
    paddingTop: 3,
    paddingRight: 3,
    paddingBottom: 8,
    paddingLeft: 8,
    borderRadius: 10,
  }),
});
