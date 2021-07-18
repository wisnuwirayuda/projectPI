import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {ILLogo} from '../../assets';
import {Button, Gap, Input, Link} from '../../components';
import {Firebase} from '../../config';
import {
  colors,
  fonts,
  showError,
  showSuccess,
  storeData,
  useForm,
} from '../../utils';

const Login = ({navigation}) => {
  const [form, setForm] = useForm({
    email: '',
    password: '',
  });
  const dispatch = useDispatch();

  const login = () => {
    dispatch({type: 'SET_LOADING', value: true});

    loginUser();
  };

  const loginUser = () => {
    Firebase.auth()
      .signInWithEmailAndPassword(form.email, form.password)
      .then(res => {
        dispatch({type: 'SET_LOADING', value: false});
        Firebase.database()
          .ref(`users/${res.user.uid}/`)
          .once('value')
          .then(resDB => {
            if (resDB.val()) {
              showSuccess('Login Success!');
              storeData('user', resDB.val());
              navigation.replace('MainApp');
            }
          });
      })
      .catch(e => {
        const errorMessage = e.message;
        dispatch({type: 'SET_LOADING', value: false});
        showError(errorMessage);
      });
  };

  return (
    <View style={styles.page}>
      <Gap height={40}></Gap>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ILLogo></ILLogo>
        <View style={styles.titleLine}>
          <Text style={styles.title}>Log in to My Doctor</Text>
          <Text style={styles.subTitle}>
            Welcome back! login with your data that you entered during
            registration
          </Text>
        </View>
        <Input
          label="Email Address"
          placeholder="Enter your email"
          value={form.email}
          onChangeText={value => setForm('email', value)}></Input>
        <Gap height={24}></Gap>
        <Input
          label="Password"
          placeholder="Enter your password"
          value={form.password}
          onChangeText={value => setForm('password', value)}></Input>
        <Gap height={10}></Gap>
        <Link label="Forgot My Password" size={12}></Link>
        <Gap height={40}></Gap>
        <Button title="Sign In" onPress={login}></Button>
        <Gap height={30}></Gap>
        <Link
          label="Create New Account"
          size={16}
          align="center"
          onPress={() => navigation.navigate('Register')}></Link>
      </ScrollView>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    paddingHorizontal: 40,
  },
  titleLine: {
    marginVertical: 40,
  },
  title: {
    fontFamily: fonts.primary[600],
    fontSize: 20,
    color: colors.secondary,
  },
  subTitle: {
    fontFamily: fonts.primary[400],
    fontSize: 16,
    color: colors.text.secondary,
  },
});
