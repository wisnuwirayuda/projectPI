import React, {useState} from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import {Button, Gap, Header, Input} from '../../components';
import {colors, getData, storeData, useForm} from '../../utils';
import {Firebase} from '../../config';
import {Loading} from '../../components';
import {showMessage, hideMessage} from 'react-native-flash-message';

const Register = ({navigation}) => {
  // const [fullname, setFullName] = useState('');
  // const [phonenumber, setPhoneNumber] = useState('');
  // const [occupation, setOccupation] = useState('');
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');

  const [form, setForm] = useForm({
    fullname: '',
    phonenumber: '',
    occupation: '',
    email: '',
    password: '',
  });

  const [loading, setLoading] = useState(false);

  const onContinue = () => {
    console.log(form);
    setLoading(true);
    Firebase.auth()
      .createUserWithEmailAndPassword(form.email, form.password)
      .then(success => {
        // Signed in
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
        // https://firebase.com/users/uid
        Firebase.database()
          .ref('users/' + user.uid + '/')
          .set(data);

        console.log(user);
        storeData('user', data);
        navigation.navigate('UploadPhoto', data);
      })
      .catch(error => {
        const errorMessage = error.message;
        setLoading(false);
        showMessage({
          message: errorMessage,
          type: 'default',
          duration: 2000,
          backgroundColor: colors.error,
          color: colors.white,
        });
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
