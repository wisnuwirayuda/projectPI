import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {DNews1, DNews2, DNews3} from '../../../assets';
import {colors, fonts} from '../../../utils';

const NewsItemHorizontal = () => {
  return (
    <View style={styles.container}>
      <Image source={DNews1} style={styles.photo}></Image>
      <View style={styles.wrapperSection}>
        <Text style={styles.tittle}>
          Eating a diet rich in fruit and vegetables daily lowers risk
        </Text>
        <Text style={styles.date}>Today</Text>
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
