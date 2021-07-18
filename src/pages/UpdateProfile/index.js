import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import {ILPhotoNull} from '../../assets';
import {Button, Gap, Header, Input, Profile} from '../../components';
import {Firebase} from '../../config';
import {colors, getData, showError, showSuccess, storeData} from '../../utils';

const UpdateProfile = ({navigation}) => {
  const [profile, setProfile] = useState({
    fullname: '',
    email: '',
    profession: '',
    phonenumber: '',
  });
  const [password, setPassword] = useState('');
  const [photo, setPhoto] = useState(ILPhotoNull);
  const [photoDB, setPhotoDB] = useState('');

  useEffect(() => {
    getData('user').then(res => {
      const data = res;
      setPhoto({uri: res.photo});
      setProfile(data);
    });
  }, []);

  const update = () => {
    if (password.length > 0) {
      if (password.length < 6) {
        showError('Password kurang dari 6 karakter');
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
          showError(err.message);
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
        storeData('user', data);
        showSuccess('Successfully');
      })
      .catch(e => {
        const errorMessage = e.message;
        showError(errorMessage);
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
      if (response.didCancel === true || response.errorMessage) {
        showError('Foto tidak dipilih');
      } else {
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
            label="Profession"
            value={profile.profession}
            onChangeText={value => changeText('profession', value)}></Input>
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
