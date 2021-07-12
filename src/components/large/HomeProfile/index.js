import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {DUser, ILPhotoNull} from '../../../assets';
import {colors, fonts, getData} from '../../../utils';

const HomeProfile = ({onPress}) => {
  const [profile, setProfile] = useState({
    fullname: '',
    occupation: '',
    photo: ILPhotoNull,
  });

  useEffect(() => {
    getData('user').then(res => {
      // console.log('data user: ', res);
      const data = res;
      data.photo = {uri: res.photo};
      console.log('new profile: ', data);
      setProfile(data);
    });
  }, []);

  return (
    <TouchableOpacity onPress={onPress} style={styles.content}>
      <Image source={profile.photo} style={styles.ava} />
      <View style={styles.info}>
        <Text style={styles.name}>{profile.fullname}</Text>
        <Text style={styles.job}>{profile.occupation}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default HomeProfile;

const styles = StyleSheet.create({
  content: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ava: {
    width: 46,
    height: 46,
    borderRadius: 46 / 2,
  },
  info: {
    marginLeft: 12,
  },
  name: {
    fontFamily: fonts.primary[600],
    fontSize: 16,
    color: colors.text.primary,
    textTransform: 'capitalize',
  },
  job: {
    fontSize: 12,
    fontFamily: fonts.primary[400],
    color: colors.text.secondary,
    textTransform: 'capitalize',
  },
});
