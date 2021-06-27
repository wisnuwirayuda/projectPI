import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button, Gap} from '../..';
import {colors} from '../../../utils';

const Header = ({onPress}) => {
  return (
    <View style={styles.container}>
      <Button type="icon-only" icon="back-dark" onPress={onPress}></Button>
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