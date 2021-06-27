import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ILLogo} from '../../assets';
import {Button, Gap, Input, Link} from '../../components';

const Login = () => {
  return (
    <View style={styles.page}>
      <ILLogo></ILLogo>
      <View style={styles.titleLine}>
        <Text style={styles.title}>Log in to My Doctor</Text>
        <Text style={styles.subTitle}>
          Welcome back! login with your data that you entered during
          registration
        </Text>
      </View>
      <Input label="Email Address" placeholder="Enter your email"></Input>
      <Gap height={24}></Gap>
      <Input label="Password" placeholder="Enter your password"></Input>
      <Gap height={10}></Gap>
      <Link label="Forgot My Password" size={12}></Link>
      <Gap height={40}></Gap>
      <Button title="Sign In"></Button>
      <Gap height={30}></Gap>
      <Link label="Create New Account" size={16} align="center"></Link>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    padding: 40,
  },
  titleLine: {
    marginVertical: 40,
  },
  title: {
    fontFamily: 'Nunito-SemiBold',
    fontSize: 20,
    color: '#112340',
  },
  subTitle: {
    fontFamily: 'Nunito-Regular',
    fontSize: 16,
    color: '#7D8797',
  },
});
