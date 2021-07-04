import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Header, ListDoctor} from '../../components';
import {colors, fonts} from '../../utils';

const ChooseDoctor = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header
        type="dark"
        title="Pilih Dokter Anak"
        onPress={() => navigation.goBack()}></Header>
      <ListDoctor
        type="next"
        list="list1"
        name="Alexander Jannie"
        desc="Wanita"></ListDoctor>
      <ListDoctor
        type="next"
        list="list2"
        name="John McParker Steve"
        desc="Pria"></ListDoctor>
      <ListDoctor
        type="next"
        list="list3"
        name="John McParker Steve"
        desc="Wanita"></ListDoctor>
      <ListDoctor
        type="next"
        list="list4"
        name="Nairobi Putri Hayza"
        desc="Wanita"></ListDoctor>
      <ListDoctor
        type="next"
        list="list5"
        name="James Rivillia"
        desc="Pria"></ListDoctor>
    </View>
  );
};

export default ChooseDoctor;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    flex: 1,
  },
});
