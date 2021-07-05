import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {Header, Profile, Input, Button, Gap} from '../../components';
import {colors} from '../../utils';

const UpdateProfile = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header title="Edit Profile" onPress={() => navigation.goBack()}></Header>
      <Gap height={10}></Gap>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.wrapperContent}>
          <Profile isRemove></Profile>
          <Gap height={26}></Gap>
          <Input label="Full Name"></Input>
          <Gap height={24}></Gap>
          <Input label="Pekerjaan"></Input>
          <Gap height={24}></Gap>
          <Input label="Email Address"></Input>
          <Gap height={24}></Gap>
          <Input label="Password"></Input>
          <Gap height={40}></Gap>
          <Button title="Save Profile"></Button>
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
