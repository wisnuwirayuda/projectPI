import React, {useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Button, Gap, Header, Input, Loading} from '../../components';
import {Firebase} from '../../config';
import {colors, showError, showSuccess, storeData, useForm} from '../../utils';

const Register = ({navigation}) => {
  const [form, setForm] = useForm({
    fullname: '',
    phonenumber: '',
    occupation: '',
    email: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);

  const onContinue = () => {
    setLoading(true);
    Firebase.auth()
      .createUserWithEmailAndPassword(form.email, form.password)
      .then(success => {
        const user = success.user;
        setLoading(false);
        setForm('reset');
        const data = {
          fullname: form.fullname,
          phonenumber: form.phonenumber,
          occupation: form.occupation,
          email: form.email,
          uid: user.uid,
        };
        Firebase.database()
          .ref('users/' + user.uid + '/')
          .set(data);

        showSuccess('Success!');
        storeData('user', data);
        navigation.navigate('UploadPhoto', data);
      })
      .catch(error => {
        const errorMessage = error.message;
        setLoading(false);
        showError(errorMessage);
      });
  };

  return (
    <>
      <View style={styles.container}>
        <Header onPress={() => navigation.goBack()} title="Register"></Header>
        <View style={styles.content}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Input
              label="Full Name"
              placeholder="Enter your full name"
              value={form.fullname}
              onChangeText={value => setForm('fullname', value)}></Input>
            <Gap height={24}></Gap>
            <Input
              label="Phone Number"
              placeholder="Enter your phone number"
              value={form.phonenumber}
              onChangeText={value => setForm('phonenumber', value)}></Input>
            <Gap height={24}></Gap>
            <Input
              label="Occupation"
              placeholder="Enter your occupation"
              value={form.occupation}
              onChangeText={value => setForm('occupation', value)}></Input>
            <Gap height={24}></Gap>
            <Input
              label="Email"
              placeholder="Enter your email"
              value={form.email}
              onChangeText={value => setForm('email', value)}></Input>
            <Gap height={24}></Gap>
            <Input
              label="Password"
              placeholder="Enter your password"
              value={form.password}
              onChangeText={value => setForm('password', value)}></Input>
            <Gap height={40}></Gap>
            <Button title="Continue" onPress={onContinue}></Button>
          </ScrollView>
        </View>
      </View>
      {loading && <Loading></Loading>}
    </>
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
