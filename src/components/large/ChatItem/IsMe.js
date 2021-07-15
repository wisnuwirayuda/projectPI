import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {colors, fonts} from '../../../utils';

const IsMe = ({text, date}) => {
  return (
    <View style={styles.container}>
      <View style={styles.chat}>
        <Text style={styles.text}>{text}</Text>
      </View>
      <Text style={styles.date}>{date}</Text>
    </View>
  );
};

export default IsMe;

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    alignItems: 'flex-end',
    paddingRight: 16,
  },
  chat: {
    backgroundColor: colors.card.secondary,
    borderRadius: 10,
    borderBottomRightRadius: 0,
    padding: 12,
    paddingRight: 18,
    maxWidth: '70%',
  },
  text: {
    fontSize: 14,
    fontFamily: fonts.primary[400],
    color: colors.text.primary,
  },
  date: {
    fontSize: 11,
    color: colors.text.secondary,
    fontFamily: fonts.primary[400],
    marginTop: 8,
  },
});
