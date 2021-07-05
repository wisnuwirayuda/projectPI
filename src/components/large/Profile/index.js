import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {DUser, IRemovePhoto, IFemaleDoctor} from '../../../assets';
import {colors, fonts} from '../../../utils';

const Profile = ({name, desc, isRemove, isFemaleDoctor}) => {
  return (
    <View style={styles.container}>
      <View style={styles.borderProfile}>
        <Image source={DUser} style={styles.ava}></Image>
        {isFemaleDoctor && <IFemaleDoctor style={styles.icon}></IFemaleDoctor>}
        {isRemove && <IRemovePhoto style={styles.icon}></IRemovePhoto>}
      </View>
      {name ? <Text style={styles.name}>{name}</Text> : null}
      {desc ? <Text style={styles.job}>{desc}</Text> : null}
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  ava: {
    width: 110,
    height: 110,
    borderRadius: 110 / 2,
  },
  borderProfile: {
    borderWidth: 1,
    width: 130,
    height: 130,
    borderRadius: 130 / 2,
    padding: 10,
    borderColor: colors.border,
    justifyContent: 'center',
    alignItems: 'center',
  },
  name: {
    fontFamily: fonts.primary[600],
    fontSize: 20,
    textAlign: 'center',
    color: colors.text.primary,
    marginTop: 16,
  },
  job: {
    fontFamily: fonts.primary[400],
    fontSize: 16,
    color: colors.text.secondary,
  },
  icon: {
    position: 'absolute',
    right: 8,
    bottom: 8,
  },
});
