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

const DoctorProfile = ({navigation, route}) => {
  const dataDoctor = route.params;

  return (
    <View style={styles.page}>
      <Header
        title="Profile"
        onPress={() => navigation.navigate('MainApp')}></Header>
      <Profile
        name={dataDoctor.data.fullName}
        desc={dataDoctor.data.profession}
        isPhoto={{uri: dataDoctor.data.photo}}
        gender={dataDoctor.data.gender}></Profile>
      <Gap height={10}></Gap>
      <ProfileItem
        label="Alumnus"
        value={dataDoctor.data.university}></ProfileItem>
      <ProfileItem
        label="Tempat Praktik"
        value={dataDoctor.data.hospital_address}></ProfileItem>
      <ProfileItem
        label="No. STR"
        value={dataDoctor.data.str_number}></ProfileItem>
      <Gap height={23}></Gap>
      <View style={styles.wrapperButton}>
        <Button
          title="Start Consultation"
          onPress={() => navigation.navigate('Chatting', dataDoctor)}></Button>
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
