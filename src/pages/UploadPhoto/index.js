import React, {useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import {IAddPhoto, ILPhotoNull, IRemovePhoto} from '../../assets';
import {Button, Gap, Header, Link} from '../../components';
import {Firebase} from '../../config';
import {colors, fonts, showError, storeData} from '../../utils';

const UploadPhoto = ({navigation, route}) => {
  const {fullname, occupation, uid} = route.params;

  const [hasPhoto, setHasPhoto] = useState(false);
  const [photo, setPhoto] = useState(ILPhotoNull);
  const [photoDB, setPhotoDB] = useState('');

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
        setHasPhoto(true);
      }
    });
  };

  const uploadAndContinue = () => {
    Firebase.database()
      .ref('users/' + uid + '/')
      .update({photo: photoDB});

    const data = route.params;
    data.photo = photoDB;
    storeData('user', data);

    navigation.replace('MainApp');
  };

  return (
    <View style={styles.page}>
      <Header title="Upload Photo" onPress={() => navigation.goBack()}></Header>
      <View style={styles.content}>
        <View style={styles.profile}>
          <TouchableOpacity style={styles.avatarWrapper} onPress={getImage}>
            <Image
              source={photo}
              width="50"
              height="50"
              style={styles.avatar}></Image>
            {hasPhoto && <IRemovePhoto style={styles.addPhoto}></IRemovePhoto>}
            {!hasPhoto && <IAddPhoto style={styles.addPhoto}></IAddPhoto>}
          </TouchableOpacity>
          <Gap height={26}></Gap>
          <Text style={styles.name}>{fullname}</Text>
          <Gap height={4}></Gap>
          <Text style={styles.profession}>{occupation}</Text>
        </View>
        <View>
          <Button
            disable={!hasPhoto}
            title="Upload and Continue"
            onPress={uploadAndContinue}></Button>
          <Gap height={30}></Gap>
          <Link
            label="Skip for this"
            align="center"
            size={16}
            onPress={() => navigation.replace('MainApp')}></Link>
        </View>
      </View>
    </View>
  );
};

export default UploadPhoto;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    flex: 1,
  },
  content: {
    paddingHorizontal: 40,
    flex: 1,
    justifyContent: 'space-between',
    paddingBottom: 64,
  },
  avatarWrapper: {
    width: 130,
    height: 130,
    borderColor: colors.border,
    borderWidth: 1,
    borderRadius: 130 / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar: {
    width: 110,
    height: 110,
    borderRadius: 110 / 2,
  },
  addPhoto: {
    position: 'absolute',
    bottom: 8,
    right: 6,
  },
  name: {
    fontSize: 24,
    fontFamily: fonts.primary[600],
    textAlign: 'center',
    color: colors.text.primary,
  },
  profession: {
    fontSize: 18,
    color: colors.text.secondary,
    fontFamily: fonts.primary[400],
    textAlign: 'center',
  },
  profile: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
});
