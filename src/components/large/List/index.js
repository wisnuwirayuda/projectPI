import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {
  DDoctor4,
  DDoctor5,
  DDoctor6,
  DDoctor7,
  DDoctor8,
  INext,
  IEditProfile,
  IRateProfile,
  IHelpProfile,
  ILanguageProfile,
} from '../../../assets';
import {colors, fonts} from '../../../utils';

const List = ({list, name, desc, type, onPress, icon}) => {
  const Photo = () => {
    if (list === 'list1') {
      return <Image source={DDoctor4} style={styles.avatar}></Image>;
    } else if (list === 'list2') {
      return <Image source={DDoctor5} style={styles.avatar}></Image>;
    } else if (list === 'list3') {
      return <Image source={DDoctor6} style={styles.avatar}></Image>;
    } else if (list === 'list4') {
      return <Image source={DDoctor7} style={styles.avatar}></Image>;
    } else if (list === 'list5') {
      return <Image source={DDoctor8} style={styles.avatar}></Image>;
    } else {
      return <Image source={DDoctor4} style={styles.avatar}></Image>;
    }
  };

  const Icons = () => {
    if (icon === 'edit-profile') {
      return <IEditProfile></IEditProfile>;
    } else if (icon === 'language-profile') {
      return <ILanguageProfile></ILanguageProfile>;
    } else if (icon === 'help-profile') {
      return <IHelpProfile></IHelpProfile>;
    } else if (icon === 'rate-profile') {
      return <IRateProfile></IRateProfile>;
    } else {
      return <IEditProfile></IEditProfile>;
    }
  };

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      {icon ? <Icons></Icons> : <Photo></Photo>}
      <View style={styles.info}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.chat}>{desc}</Text>
      </View>
      {type === 'next' && <INext></INext>}
    </TouchableOpacity>
  );
};

export default List;

const styles = StyleSheet.create({
  avatar: {
    width: 46,
    height: 46,
    borderRadius: 46 / 2,
  },
  container: {
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    justifyContent: 'space-between',
  },
  info: {
    flex: 1,
    marginLeft: 16,
  },
  name: {
    fontSize: 16,
    fontFamily: fonts.primary[400],
    color: colors.text.primary,
  },
  chat: {
    fontSize: 12,
    fontFamily: fonts.primary[300],
    color: colors.text.secondary,
  },
});