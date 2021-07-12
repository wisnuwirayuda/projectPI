import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import {colors} from '../../../utils';

const Input = ({label, placeholder, value, onChangeText, disable}) => {
  const [border, setBorder] = useState(colors.border);
  const onFocusForm = () => {
    setBorder(colors.borderFocus);
  };
  const onBlurForm = () => {
    setBorder(colors.border);
  };
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input(border)}
        secureTextEntry={label === 'Password' ? true : false}
        placeholder={placeholder}
        onFocus={onFocusForm}
        onBlur={onBlurForm}
        value={value}
        onChangeText={onChangeText}
        editable={!disable}
        selectTextOnFocus={!disable}></TextInput>
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
  input: border => ({
    borderWidth: 1,
    borderRadius: 10,
    borderColor: border,
    padding: 12,
  }),
});
