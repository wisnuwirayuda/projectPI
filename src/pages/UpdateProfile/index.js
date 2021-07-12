import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {Header, Profile, Input, Button, Gap} from '../../components';
import {colors, getData} from '../../utils';
import {ILPhotoNull} from '../../assets';
import {Firebase} from '../../config';
import {showMessage} from 'react-native-flash-message';

const UpdateProfile = ({navigation}) => {
  const [profile, setProfile] = useState({
    fullname: '',
    email: '',
    occupation: '',
    phonenumber: '',
    photo: ILPhotoNull,
  });
  const [password, setPassword] = useState('');

  useEffect(() => {
    getData('user').then(res => {
      // console.log('data user: ', res);
      const data = res;
      data.photo = {uri: res.photo};
      console.log('new profile: ', data);
      setProfile(data);
    });
  }, []);

  const update = () => {
    console.log('Profile: ', profile);
    const data = profile;
    data.photo = profile.photo.uri;
    Firebase.database()
      .ref(`users/${profile.uid}/`)
      .update(profile)
      .then(() => {
        console.log('Success: ');
      })
      .catch(e => {
        const errorMessage = e.message;
        showMessage({
          message: errorMessage,
          type: 'default',
          duration: 2000,
          backgroundColor: colors.error,
          color: colors.white,
        });
      });
  };

  const changeText = (key, value) => {
    setProfile({
      ...profile,
      [key]: value,
    });
  };

  return (
    <View style={styles.page}>
      <Header title="Edit Profile" onPress={() => navigation.goBack()}></Header>
      <Gap height={10}></Gap>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.wrapperContent}>
          <Profile isRemove isPhoto={profile.photo}></Profile>
          <Gap height={26}></Gap>
          <Input
            label="Full Name"
            value={profile.fullname}
            onChangeText={value => changeText('fullname', value)}></Input>
          <Gap height={24}></Gap>
          <Input
            label="Occupation"
            value={profile.occupation}
            onChangeText={value => changeText('occupation', value)}></Input>
          <Gap height={24}></Gap>
          <Input
            label="Phone Number"
            value={profile.phonenumber}
            onChangeText={value => changeText('phonenumber', value)}></Input>
          <Gap height={24}></Gap>
          <Input label="Email Address" value={profile.email} disable></Input>
          <Gap height={24}></Gap>
          <Input label="Password"></Input>
          <Gap height={40}></Gap>
          <Button title="Save Profile" onPress={update}></Button>
        </View>
      </ScrollView>
    </View>
  );
};

export default UpdateProfile;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    flex: 1,
  },
  wrapperContent: {
    padding: 40,
    paddingBottom: 48,
    paddingTop: 0,
  },
});
