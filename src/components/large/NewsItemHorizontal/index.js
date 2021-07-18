import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {DNews1, DNews2, DNews3} from '../../../assets';
import {colors, fonts} from '../../../utils';

const NewsItemHorizontal = ({title, pic, date}) => {
  return (
    <View style={styles.container}>
      <Image source={{uri: pic}} style={styles.photo}></Image>
      <View style={styles.wrapperSection}>
        <Text style={styles.tittle}>{title}</Text>
        <Text style={styles.date}>{date}</Text>
      </View>
    </View>
  );
};

export default NewsItemHorizontal;

const styles = StyleSheet.create({
  container: {
    paddingRight: 32,
  },
  photo: {
    width: 285,
    height: 184,
    borderRadius: 15,
    marginBottom: 10,
  },
  wrapperSection: {
    width: 285,
  },
  tittle: {
    fontSize: 16,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
  },
  date: {
    fontSize: 12,
    fontFamily: fonts.primary[400],
    color: colors.text.secondary,
    marginTop: 4,
  },
});
