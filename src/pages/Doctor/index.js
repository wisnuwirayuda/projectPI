import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {
  HomeProfile,
  DoctorCategory,
  RatedDoctor,
  NewsItem,
} from '../../components';
import {Gap} from '../../components';
import {fonts, colors} from '../../utils';

const Doctor = () => {
  return (
    <View style={styles.page}>
      <HomeProfile></HomeProfile>
      <Gap height={30}></Gap>
      <Text style={styles.textCategory}>Want to consult with who today?</Text>
      <Gap height={16}></Gap>
      <DoctorCategory></DoctorCategory>
      <DoctorCategory></DoctorCategory>
      <DoctorCategory></DoctorCategory>
      <DoctorCategory></DoctorCategory>
      <Text>Top Rated Doctors</Text>
      <RatedDoctor></RatedDoctor>
      <RatedDoctor></RatedDoctor>
      <RatedDoctor></RatedDoctor>
      <Text>Good News</Text>
      <NewsItem></NewsItem>
      <NewsItem></NewsItem>
      <NewsItem></NewsItem>
    </View>
  );
};

export default Doctor;

const styles = StyleSheet.create({
  page: {
    paddingHorizontal: 16,
    paddingVertical: 30,
  },
  textCategory: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    maxWidth: 209,
  },
});
