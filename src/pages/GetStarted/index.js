import React from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import {ILBackground, ILLogo} from '../../assets';
import {Button, Gap} from '../../components';

const GetStarted = ({navigation}) => {
  return (
    <ImageBackground source={ILBackground} style={styles.page}>
      <View>
        <ILLogo></ILLogo>
        <Text style={styles.title}>Find Your Consultation</Text>
        <Text style={styles.subTitle}>
          Consultation with a doctor becomes easier & more flexible
        </Text>
      </View>
      <View>
        <Button
          onPress={() => navigation.navigate('Register')}
          title="Get Started"></Button>
        <Gap height={16}></Gap>
        <Button
          onPress={() => navigation.replace('Login')}
          title="Sign In"
          type="secondary"></Button>
      </View>
    </ImageBackground>
  );
};

export default GetStarted;

const styles = StyleSheet.create({
  page: {
    padding: 40,
    justifyContent: 'space-between',
    backgroundColor: 'orange',
    flex: 1,
  },
  title: {
    fontSize: 30,
    marginTop: 91,
    color: 'white',
    fontFamily: 'Nunito-SemiBold',
  },
  subTitle: {
    fontSize: 20,
    color: 'white',
    fontFamily: 'Nunito-Regular',
  },
});
