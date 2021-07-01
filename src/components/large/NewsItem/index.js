import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {DNews1, DNews2, DNews3} from '../../../assets';
import {colors, fonts} from '../../../utils';

const NewsItem = ({list}) => {
  const Photo = () => {
    if (list === 'news1') {
      return <Image source={DNews1} style={styles.photo}></Image>;
    } else if (list === 'news2') {
      return <Image source={DNews2} style={styles.photo}></Image>;
    } else if (list === 'news3') {
      return <Image source={DNews3} style={styles.photo}></Image>;
    } else {
      return <Image source={DNews1} style={styles.photo}></Image>;
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.tittle}>
          Is it safe to stay at home during coronavirus?
        </Text>
        <Text style={styles.date}>Today</Text>
      </View>
      <Photo></Photo>
    </View>
  );
};

export default NewsItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    paddingBottom: 12,
    paddingHorizontal: 16,
  },
  wrapper: {
    flex: 1,
  },
  tittle: {
    fontSize: 16,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    maxWidth: '90%',
  },
  date: {
    fontSize: 12,
    fontFamily: fonts.primary[400],
    color: colors.text.secondary,
    marginTop: 4,
  },
  photo: {
    width: 80,
    height: 60,
  },
});
