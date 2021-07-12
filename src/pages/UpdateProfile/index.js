import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {Header, Profile, Input, Button, Gap} from '../../components';
import {colors, getData, storeData} from '../../utils';
import {ILPhotoNull} from '../../assets';
import {Firebase} from '../../config';
import {showMessage} from 'react-native-flash-message';
import {launchImageLibrary} from 'react-native-image-picker';

const UpdateProfile = ({navigation}) => {
  const [profile, setProfile] = useState({
    fullname: '',
    email: '',
    occupation: '',
    phonenumber: '',
  });
  const [password, setPassword] = useState('');
  const [photo, setPhoto] = useState(ILPhotoNull);
  const [photoDB, setPhotoDB] = useState('');

  useEffect(() => {
    getData('user').then(res => {
      // console.log('data user: ', res);
      const data = res;
      setPhoto({uri: res.photo});
      console.log('new profile: ', data);
      setProfile(data);
    });
  }, []);

  const update = () => {
    console.log('Profile: ', profile);

    console.log('New Password: ', password);

    if (password.length > 0) {
      if (password.length < 6) {
        showMessage({
          message: 'Password kurang dari 6 karakter',
          type: 'default',
          duration: 3000,
          backgroundColor: colors.error,
          color: colors.white,
        });
      } else {
        // update password
        updatePassword();
        updateProfileData();
        navigation.goBack();
      }
    } else {
      updateProfileData();
    }
  };

  const updatePassword = () => {
    Firebase.auth().onAuthStateChanged(user => {
      if (user) {
        user.updatePassword(password).catch(err => {
          showMessage({
            message: err.message,
            type: 'default',
            duration: 3000,
            backgroundColor: colors.error,
            color: colors.white,
          });
        });
      }
    });
  };

  const updateProfileData = () => {
    const data = profile;
    data.photo = photoDB;
    Firebase.database()
      .ref(`users/${profile.uid}/`)
      .update(data)
      .then(() => {
        console.log('Success: ', data);
        storeData('user', data);
        showMessage({
          message: 'Successfully!',
          type: 'success',
          duration: 2000,
        });
      })
      .catch(e => {
        const errorMessage = e.message;
        showMessage({
          message: errorMessage,
          type: 'default',
          duration: 2000,
          backgroundColor: colors.error,
          color: colors.white,
        });
      });
  };

  const changeText = (key, value) => {
    setProfile({
      ...profile,
      [key]: value,
    });
  };

  const options = {
    quality: 0.5,
    maxWidth: 200,
    maxHeight: 200,
    includeBase64: true,
    mediaType: 'mixed',
  };

  const getImage = () => {
    launchImageLibrary(options, response => {
      // console.log('response: ', response);

      if (response.didCancel === true || response.errorMessage) {
        showMessage({
          message: 'Foto tidak dipilih',
          type: 'default',
          backgroundColor: colors.error,
          color: colors.white,
        });
      } else {
        console.log('Response getImage: ', response);
        const userPhoto = response.assets[0];
        const source = {uri: userPhoto.uri};
        setPhotoDB(`data:${userPhoto.type};base64,${userPhoto.base64}`);
        setPhoto(source);
      }
    });
  };

  return (
    <View style={styles.page}>
      <Header title="Edit Profile" onPress={() => navigation.goBack()}></Header>
      <Gap height={10}></Gap>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.wrapperContent}>
          <Profile isRemove isPhoto={photo} onPress={getImage}></Profile>
          <Gap height={26}></Gap>
          <Input
            label="Full Name"
            value={profile.fullname}
            onChangeText={value => changeText('fullname', value)}></Input>
          <Gap height={24}></Gap>
          <Input
            label="Occupation"
            value={profile.occupation}
            onChangeText={value => changeText('occupation', value)}></Input>
          <Gap height={24}></Gap>
          <Input
            label="Phone Number"
            value={profile.phonenumber}
            onChangeText={value => changeText('phonenumber', value)}></Input>
          <Gap height={24}></Gap>
          <Input label="Email Address" value={profile.email} disable></Input>
          <Gap height={24}></Gap>
          <Input
            label="Password"
            value={password}
            onChangeText={value => setPassword(value)}></Input>
          <Gap height={40}></Gap>
          <Button title="Save Profile" onPress={update}></Button>
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
