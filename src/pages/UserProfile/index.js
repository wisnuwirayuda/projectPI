import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {ILPhotoNull} from '../../assets';
import {Gap, Header, List, Profile} from '../../components';
import {Firebase} from '../../config';
import {colors, getData, showError} from '../../utils';

const UserProfile = ({navigation}) => {
  const [profile, setProfile] = useState({
    fullname: 'user',
    profession: 'user',
    photo: ILPhotoNull,
  });

  useEffect(() => {
    getData('user').then(res => {
      const data = res;
      data.photo = {uri: res.photo};
      setProfile(data);
    });
  }, []);

  const signOut = () => {
    Firebase.auth()
      .signOut()
      .then(() => {
        navigation.replace('GetStarted');
      })
      .catch(err => {
        showError(err.message);
      });
  };

  return (
    <View style={styles.page}>
      <Header onPress={() => navigation.goBack()} title="Profile"></Header>
      <Gap height={10}></Gap>
      <Profile
        name={profile.fullname}
        desc={profile.profession}
        isPhoto={profile.photo}></Profile>
      <Gap height={14}></Gap>
      <List
        name="Edit Profile"
        desc="Last updated yesterday"
        type="next"
        icon="edit-profile"
        onPress={() => navigation.navigate('UpdateProfile')}></List>
      <List
        name="Language"
        desc="Available 12 languages"
        type="next"
        icon="language-profile"></List>
      <List
        name="Give Us Rate"
        desc="On Google Play Store"
        type="next"
        icon="rate-profile"></List>
      <List name="Sign Out" type="next" icon="logout" onPress={signOut}></List>
    </View>
  );
};

export default UserProfile;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    flex: 1,
  },
});
