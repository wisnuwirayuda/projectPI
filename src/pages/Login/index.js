import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
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

{
  /* <View>
        <ILLogo style={{marginTop: 40, marginLeft: 40}}></ILLogo>
        <Text
          style={{
            width: 153,
            marginTop: 40,
            marginLeft: 40,
            fontSize: 20,
            fontFamily: 'Nunito-SemiBold',
            color: '#112340',
          }}>
          Masuk dan mulai berkonsultasi
        </Text>
      </View>
      <View
        style={{
          marginTop: 40,
          marginHorizontal: 40,
          width: 280,
        }}>
        <Text
          style={{
            fontFamily: 'Nunito-Regular',
            fontSize: 16,
            color: '#7D8797',
          }}>
          Email Address
        </Text>
        <Gap height={6}></Gap>
        <TextInput
          style={{
            borderWidth: 1,
            borderRadius: 10,
            borderColor: '#E9E9E9',
          }}></TextInput>
      </View>
      <Gap height={24}></Gap>
      <View style={{marginHorizontal: 40}}>
        <Text
          style={{
            fontFamily: 'Nunito-Regular',
            fontSize: 16,
            color: '#7D8797',
          }}>
          Password
        </Text>
        <Gap height={6}></Gap>
        <TextInput
          style={{
            borderWidth: 1,
            borderRadius: 10,
            borderColor: '#E9E9E9',
          }}></TextInput>
        <Gap height={10}></Gap>
        <Text
          style={{
            fontFamily: 'Nunito-Regular',
            fontSize: 12,
            color: '#7D8797',
            textDecorationLine: 'underline',
          }}>
          Forgot My Password
        </Text>
      </View>
      <Gap height={40}></Gap>
      <View style={{marginHorizontal: 40}}>
        <Button title="Sign In"></Button>
        <Gap height={30}></Gap>
        <Text
          style={{
            textAlign: 'center',
            fontFamily: 'Nunito-Regular',
            fontSize: 16,
            color: '#7D8797',
            textDecorationLine: 'underline',
          }}>
          Create New Account
        </Text>
      </View> */
}
