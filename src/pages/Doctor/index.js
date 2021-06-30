import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
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
      <View style={styles.container}>
        <HomeProfile></HomeProfile>
        <Gap height={30}></Gap>
        <Text style={styles.textCategory}>
          Mau konsultasi dengan siapa hari ini?
        </Text>
        <Gap height={16}></Gap>
        <View style={styles.wrapperScroll}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={{flexDirection: 'row'}}>
              <Gap width={16}></Gap>
              <DoctorCategory category="umum"></DoctorCategory>
              <DoctorCategory category="psikiater"></DoctorCategory>
              <DoctorCategory category="obat"></DoctorCategory>
              <DoctorCategory category="anak"></DoctorCategory>
              <Gap width={6}></Gap>
            </View>
          </ScrollView>
        </View>
        <Text style={styles.sectionLabel}>Top Rated Doctors</Text>
        <RatedDoctor></RatedDoctor>
        <RatedDoctor></RatedDoctor>
        <RatedDoctor></RatedDoctor>
        <Text style={styles.sectionLabel}>Good News</Text>
        <NewsItem></NewsItem>
        <NewsItem></NewsItem>
        <NewsItem></NewsItem>
      </View>
    </View>
  );
};

export default Doctor;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 30,
    backgroundColor: colors.white,
    flex: 1,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  },
  page: {
    backgroundColor: colors.primary,
    flex: 1,
  },
  textCategory: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    maxWidth: 209,
  },
  wrapperScroll: {
    marginHorizontal: -16,
  },
  sectionLabel: {
    fontSize: 16,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    marginTop: 30,
    marginBottom: 16,
  },
});
