import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {colors, fonts} from '../../../utils';
import {DDoctor7} from '../../../assets';

const Other = ({text, date, photo}) => {
  return (
    <View style={styles.container}>
      <Image source={photo} style={styles.ava}></Image>
      <View style={styles.wrapperChat}>
        <View style={styles.chat}>
          <Text style={styles.text}>{text}</Text>
        </View>
        <Text style={styles.date}>{date}</Text>
      </View>
    </View>
  );
};

export default Other;

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    alignItems: 'flex-end',
    paddingLeft: 16,
    flexDirection: 'row',
  },
  ava: {
    width: 30,
    height: 30,
    borderRadius: 30 / 2,
    marginRight: 12,
  },
  wrapperChat: {
    maxWidth: '70%',
  },
  chat: {
    backgroundColor: colors.card.primary,
    borderRadius: 10,
    borderBottomLeftRadius: 0,
    padding: 12,
    paddingRight: 18,
  },
  text: {
    fontSize: 14,
    fontFamily: fonts.primary[400],
    color: colors.white,
  },
  date: {
    fontSize: 11,
    color: colors.text.secondary,
    fontFamily: fonts.primary[400],
    marginTop: 8,
  },
});
