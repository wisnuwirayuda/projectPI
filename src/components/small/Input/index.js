import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import {colors} from '../../../utils';

const Input = ({label, placeholder}) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        secureTextEntry={label === 'Password' ? true : false}
        placeholder={placeholder}></TextInput>
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  label: {
    color: colors.text.secondary,
    fontSize: 16,
    marginBottom: 6,
  },
  input: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: colors.border,
    padding: 12,
  },
});
