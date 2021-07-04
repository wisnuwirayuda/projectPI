import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {colors, fonts} from '../../../utils';
import {Button} from '../../../components';
import {DDoctor7} from '../../../assets';

const DarkProfile = ({onPress}) => {
  return (
    <View style={styles.container}>
      <Button type="icon-only" icon="back-light" onPress={onPress}></Button>
      <View style={styles.wrapper}>
        <Text style={styles.name}>Nairobi Putri Hayza</Text>
        <Text style={styles.position}>Dokter Anak</Text>
      </View>
      <Image source={DDoctor7} style={styles.ava}></Image>
    </View>
  );
};

export default DarkProfile;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    paddingVertical: 30,
    paddingLeft: 20,
    paddingRight: 16,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  wrapper: {
    flex: 1,
  },
  name: {
    fontFamily: fonts.primary[600],
    fontSize: 20,
    color: colors.white,
    textAlign: 'center',
  },
  position: {
    fontFamily: fonts.primary[400],
    fontSize: 14,
    color: colors.text.subTitle,
    textAlign: 'center',
  },
  ava: {
    width: 46,
    height: 46,
  },
});
