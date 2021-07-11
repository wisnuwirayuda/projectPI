import React, {useEffect} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {
  HomeProfile,
  DoctorCategory,
  RatedDoctor,
  NewsItem,
} from '../../components';
import {Gap} from '../../components';
import {fonts, colors, getData} from '../../utils';
import {JSONCategoryDoctor} from '../../assets';

const Doctor = ({navigation}) => {
  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <View style={styles.wrapperSection}>
          <Gap height={30}></Gap>
          <HomeProfile
            onPress={() => navigation.navigate('UserProfile')}></HomeProfile>
          <Gap height={30}></Gap>
          <Text style={styles.textCategory}>
            Mau konsultasi dengan siapa hari ini?
          </Text>
        </View>
        <Gap height={16}></Gap>
        <View style={styles.wrapperScroll}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={{flexDirection: 'row'}}>
              <Gap width={32}></Gap>
              {JSONCategoryDoctor.data.map(item => {
                return (
                  <DoctorCategory
                    key={item.id}
                    category={item.category}
                    onPress={() =>
                      navigation.navigate('ChooseDoctor')
                    }></DoctorCategory>
                );
              })}
              <Gap width={22}></Gap>
            </View>
          </ScrollView>
        </View>
        <View style={styles.wrapperSection}>
          <Text style={styles.sectionLabel}>Top Rated Doctors</Text>
          <RatedDoctor
            list="doctor1"
            name="Alexa Rachel"
            category="Pediatrician"
            onPress={() => navigation.navigate('DoctorProfile')}></RatedDoctor>
          <Gap height={16}></Gap>
          <RatedDoctor
            list="doctor2"
            name="Sunny Frank"
            category="Dentist"></RatedDoctor>
          <Gap height={16}></Gap>
          <RatedDoctor
            list="doctor3"
            name="Poe Minn"
            category="Podiatrist"></RatedDoctor>
          <Gap height={30}></Gap>
        </View>
      </View>
    </View>
  );
};

export default Doctor;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  },
  page: {
    backgroundColor: colors.primary,
    flex: 1,
  },
  wrapperSection: {
    paddingHorizontal: 16,
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
