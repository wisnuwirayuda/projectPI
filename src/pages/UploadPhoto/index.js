import React, {useState} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {Header, Button, Link, Gap} from '../../components';
import {ILPhotoNull, IAddPhoto, IRemovePhoto} from '../../assets';
import {colors, fonts} from '../../utils';
import {launchImageLibrary} from 'react-native-image-picker';
import {showMessage} from 'react-native-flash-message';

const UploadPhoto = ({navigation}) => {
  const [hasPhoto, setHasPhoto] = useState(false);
  const [photo, setPhoto] = useState(ILPhotoNull);

  const options = {
    mediaType: 'mixed',
    includeBase64: true,
    // selectionLimit: 0,
  };

  const getImage = () => {
    launchImageLibrary(options, response => {
      console.log('response: ', response);

      if (response.didCancel === true || response.errorMessage) {
        showMessage({
          message: 'Oops, sepertinya anda tidak memilih fotonya',
          type: 'default',
          backgroundColor: colors.error,
          color: colors.white,
        });
      } else {
        const userPhoto = response.assets[0];
        const source = {uri: userPhoto.uri};

        setPhoto(source);
        setHasPhoto(true);
      }
    });
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
          <Text style={styles.name}>Shayna Melinda</Text>
          <Gap height={4}></Gap>
          <Text style={styles.profession}>Product Designer</Text>
        </View>
        <View>
          <Button
            disable={!hasPhoto}
            title="Upload and Continue"
            onPress={() => navigation.replace('MainApp')}></Button>
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
