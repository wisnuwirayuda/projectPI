import React, {useState} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {Header, Button, Link, Gap} from '../../components';
import {ILPhotoNull, IAddPhoto, IRemovePhoto} from '../../assets';
import {colors, fonts} from '../../utils';

const UploadPhoto = ({navigation}) => {
  const [hasPhoto, setHasPhoto] = useState(false);

  return (
    <View style={styles.page}>
      <Header title="Upload Photo" onPress={() => navigation.goBack()}></Header>
      <View style={styles.content}>
        <View style={styles.profile}>
          <View style={styles.avatarWrapper}>
            <Image
              source={ILPhotoNull}
              width="50"
              height="50"
              style={styles.avatar}></Image>
            {hasPhoto && <IRemovePhoto style={styles.addPhoto}></IRemovePhoto>}
            {!hasPhoto && <IAddPhoto style={styles.addPhoto}></IAddPhoto>}
          </View>
          <Gap height={26}></Gap>
          <Text style={styles.name}>Shayna Melinda</Text>
          <Gap height={4}></Gap>
          <Text style={styles.profession}>Product Designer</Text>
        </View>
        <View>
          <Button
            disable
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
