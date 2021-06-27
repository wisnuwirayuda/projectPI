import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

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
    color: '#7D8797',
    fontFamily: 'Nunito-Regular',
    textDecorationLine: 'underline',
    fontSize: size,
    textAlign: align,
  }),
});
