import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Header, Profile, List, Gap} from '../../components';
import {colors} from '../../utils';

const UserProfile = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header onPress={() => navigation.goBack()} title="Profile"></Header>
      <Gap height={10}></Gap>
      <Profile name="Shayna Melinda" desc="Product Designer"></Profile>
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
        icon="help-profile"></List>
      <List
        name="Help Center"
        desc="Read our guidelines"
        type="next"
        icon="rate-profile"></List>
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
