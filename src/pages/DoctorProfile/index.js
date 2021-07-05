import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {
  Header,
  Profile,
  Input,
  Button,
  ProfileItem,
  Gap,
} from '../../components';
import {colors} from '../../utils';

const DoctorProfile = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header
        title="Profile"
        onPress={() => navigation.navigate('MainApp')}></Header>
      <Profile
        name="Nairobi Putri Hayza"
        desc="Dokter Anak"
        isFemaleDoctor></Profile>
      <Gap height={10}></Gap>
      <ProfileItem
        label="Alumnus"
        value="Universitas Gunadarma, 2020"></ProfileItem>
      <ProfileItem
        label="Tempat Praktik"
        value="Rumah Sakit Umum, Bandung"></ProfileItem>
      <ProfileItem label="No. STR" value="0000116622081996"></ProfileItem>
      <Gap height={23}></Gap>
      <View style={styles.wrapperButton}>
        <Button
          title="Start Consultation"
          onPress={() => navigation.navigate('Chatting')}></Button>
      </View>
    </View>
  );
};

export default DoctorProfile;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    flex: 1,
  },
  wrapperButton: {
    paddingHorizontal: 40,
    paddingTop: 23,
  },
});
