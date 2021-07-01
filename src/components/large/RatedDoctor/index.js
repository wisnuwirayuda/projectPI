import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {DDoctor1, DDoctor2, DDoctor3, IRatedDoctor} from '../../../assets';
import {colors, fonts} from '../../../utils';

const RatedDoctor = ({list, name, category}) => {
  const Doctor = () => {
    if (list === 'doctor1') {
      return <Image source={DDoctor1} style={styles.ava}></Image>;
    } else if (list === 'doctor2') {
      return <Image source={DDoctor2} style={styles.ava}></Image>;
    } else if (list === 'doctor3') {
      return <Image source={DDoctor3} style={styles.ava}></Image>;
    } else {
      return <Image source={DDoctor1} style={styles.ava}></Image>;
    }
  };

  return (
    <View style={styles.page}>
      <Doctor></Doctor>
      <View style={styles.info}>
        <Text style={styles.nameInfo}>{name}</Text>
        <Text style={styles.categoryInfo}>{category}</Text>
      </View>
      <View style={styles.ratedDoctor}>
        <IRatedDoctor></IRatedDoctor>
        <IRatedDoctor></IRatedDoctor>
        <IRatedDoctor></IRatedDoctor>
        <IRatedDoctor></IRatedDoctor>
        <IRatedDoctor></IRatedDoctor>
      </View>
    </View>
  );
};

export default RatedDoctor;

const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  ava: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    marginRight: 12,
  },
  info: {
    flex: 1,
  },
  nameInfo: {
    fontSize: 16,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    marginBottom: 2,
  },
  categoryInfo: {
    fontSize: 12,
    fontFamily: fonts.primary[400],
    color: colors.text.secondary,
  },
  ratedDoctor: {
    flexDirection: 'row',
  },
});
