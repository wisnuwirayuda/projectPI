import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {DoctorCategory, Gap, HomeProfile, RatedDoctor} from '../../components';
import {Firebase} from '../../config';
import {colors, fonts} from '../../utils';

const Doctor = ({navigation}) => {
  const [categoryDoctor, setCategoryDoctor] = useState([]);
  const [doctors, setDoctors] = useState([]);
  useEffect(() => {
    getCategoryDoctor();
    getTopRatedDoctor();
  }, []);

  const getCategoryDoctor = () => {
    Firebase.database()
      .ref('category_doctor/')
      .once('value')
      .then(res => {
        // console.log('category data: ', res.val());
        if (res.val()) {
          const data = res.val();
          const filterData = data.filter(elemen => elemen != null);
          // console.log('elemen data: ', filterData);
          setCategoryDoctor(filterData);
        }
      })
      .catch(err => {
        showError(err.message);
      });
  };

  const parseArray = listObject => {
    const data = [];
    Object.keys(listObject).map(key => {
      data.push({
        id: key,
        data: listObject[key],
      });
    });
    return data;
  };

  const getTopRatedDoctor = () => {
    Firebase.database()
      .ref('doctors/')
      .orderByChild('rate')
      .limitToLast(4)
      .once('value')
      .then(res => {
        // console.log('top rated doctors ', res.val());
        if (res.val()) {
          // setCategoryDoctor(res.val());
          const data = parseArray(res.val());
          // console.log('Top Rated Doctor: ', data);
          setDoctors(data);
        }
      })
      .catch(err => {
        showError(err.message);
      });
  };

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
              {categoryDoctor.map(item => {
                return (
                  <DoctorCategory
                    key={item.id}
                    category={item.category}
                    onPress={() =>
                      navigation.navigate('ChooseDoctor', item)
                    }></DoctorCategory>
                );
              })}
              <Gap width={22}></Gap>
            </View>
          </ScrollView>
        </View>
        <View style={styles.wrapperSection}>
          <Text style={styles.sectionLabel}>Top Rated Doctors</Text>
          {doctors.map(doctor => {
            return (
              <View key={doctor.id}>
                <RatedDoctor
                  name={doctor.data.fullName}
                  category={doctor.data.profession}
                  photo={{uri: doctor.data.photo}}
                  onPress={() =>
                    navigation.navigate('DoctorProfile', doctor)
                  }></RatedDoctor>
                <Gap height={16}></Gap>
              </View>
            );
          })}
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
