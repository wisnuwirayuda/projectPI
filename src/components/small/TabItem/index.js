import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {
  IDoctor,
  IDoctorActive,
  IMessages,
  IMessagesActive,
  INews,
  INewsActive,
} from '../../../assets';
import {fonts, colors} from '../../../utils';

const TabItem = ({title, active, onPress, onLongPress}) => {
  const Icon = () => {
    if (title === 'Doctor') {
      return active ? <IDoctorActive></IDoctorActive> : <IDoctor></IDoctor>;
    } else if (title === 'Messages') {
      return active ? (
        <IMessagesActive></IMessagesActive>
      ) : (
        <IMessages></IMessages>
      );
    } else if (title === 'News') {
      return active ? <INewsActive></INewsActive> : <INews></INews>;
    } else {
      return active ? <IDoctorActive></IDoctorActive> : <IDoctor></IDoctor>;
    }
  };

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      onLongPress={onLongPress}>
      <Icon></Icon>
      <Text style={styles.label(active)}>{title}</Text>
    </TouchableOpacity>
  );
};

export default TabItem;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  label: active => ({
    fontSize: 10,
    fontFamily: fonts.primary[600],
    color: active ? colors.text.active : colors.text.inActive,
    marginTop: 4,
  }),
});
