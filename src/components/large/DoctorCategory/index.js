import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {ILCatUmum, ILCatAnak, ILCatObat, ILCatPsikiater} from '../../../assets';
import {colors, fonts} from '../../../utils';
import {Gap} from '../../';

const DoctorCategory = ({category}) => {
  const Icon = () => {
    if (category === 'dokter umum') {
      return <ILCatUmum></ILCatUmum>;
    } else if (category === 'dokter anak') {
      return <ILCatAnak></ILCatAnak>;
    } else if (category === 'dokter obat') {
      return <ILCatObat></ILCatObat>;
    } else if (category === 'psikiater') {
      return <ILCatPsikiater></ILCatPsikiater>;
    } else {
      return <ILCatUmum></ILCatUmum>;
    }
  };

  return (
    <View style={styles.container}>
      <Icon></Icon>
      <Gap height={28}></Gap>
      <Text style={styles.label1}>Saya butuh</Text>
      <Text style={styles.label2}>{category}</Text>
    </View>
  );
};

export default DoctorCategory;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.card,
    padding: 12,
    alignSelf: 'flex-start',
    borderRadius: 10,
    marginRight: 10,
    width: 100,
    height: 130,
  },
  label1: {
    fontSize: 12,
    fontFamily: fonts.primary[300],
    color: colors.text.primary,
  },
  label2: {
    fontSize: 12,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
  },
});
