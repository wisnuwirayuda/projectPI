import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {colors, fonts} from '../../../utils';

const Link = ({label, size, align}) => {
  return (
    <View>
      <Text style={styles.label(size, align)}>{label}</Text>
    </View>
  );
};

export default Link;

const styles = StyleSheet.create({
  label: (size, align) => ({
    color: colors.text.secondary,
    fontFamily: fonts.primary[400],
    textDecorationLine: 'underline',
    fontSize: size,
    textAlign: align,
  }),
});
