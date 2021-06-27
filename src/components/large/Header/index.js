import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {IBack} from '../../../assets';
import {Gap} from '../..';
import {colors} from '../../../utils';

const Header = () => {
  return (
    <View style={styles.container}>
      <IBack></IBack>
      <Text style={styles.title}>Register</Text>
      <Gap width={24}></Gap>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 30,
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',
    flex: 1,
    color: colors.text.primary,
    fontSize: 20,
    fontFamily: 'Nunito-SemiBold',
  },
});
