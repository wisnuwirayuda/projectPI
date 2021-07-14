import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import {colors, fonts} from '../../../utils';
import {Button} from '../..';

const InputChat = ({value, onChangeText, onButtonPress}) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Tulis pesan untuk Nairobi"
        value={value}
        onChangeText={onChangeText}></TextInput>
      <Button
        title="send"
        type="btn-icon-send"
        disable={value.length < 1}
        onPress={onButtonPress}></Button>
    </View>
  );
};

export default InputChat;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
  },
  input: {
    backgroundColor: colors.disable,
    padding: 14,
    borderRadius: 10,
    flex: 1,
    maxHeight: 45,
    marginRight: 10,
    fontSize: 14,
    fontFamily: fonts.primary.normal,
  },
});
