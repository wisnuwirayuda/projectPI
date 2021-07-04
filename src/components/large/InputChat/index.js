import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import {colors, fonts} from '../../../utils';
import {Button} from '../..';

const InputChat = () => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Tulis pesan untuk Nairobi"></TextInput>
      <Button title="send" type="btn-icon-send" disable={true}></Button>
    </View>
  );
};

export default InputChat;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
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
