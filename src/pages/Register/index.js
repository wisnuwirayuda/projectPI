import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Header, Input, Button, Gap} from '../../components';
import {colors} from '../../utils';

const Register = () => {
  return (
    <View style={styles.container}>
      <Header></Header>
      <View style={styles.content}>
        <Input label="Full Name" placeholder="Enter your full name"></Input>
        <Gap height={24}></Gap>
        <Input label="Occupation" placeholder="Enter your occupation"></Input>
        <Gap height={24}></Gap>
        <Input label="Email" placeholder="Enter your email"></Input>
        <Gap height={24}></Gap>
        <Input label="Password" placeholder="Enter your password"></Input>
        <Gap height={40}></Gap>
        <Button title="Continue"></Button>
      </View>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
  },
  content: {
    padding: 40,
    paddingTop: 0,
  },
});
