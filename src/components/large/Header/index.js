import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button, Gap} from '../..';
import {colors, fonts} from '../../../utils';
import DarkProfile from './DarkProfile';

const Header = ({onPress, title, type, desc, photo}) => {
  if (type === 'dark-profile') {
    return (
      <DarkProfile
        onPress={onPress}
        title={title}
        desc={desc}
        photo={photo}></DarkProfile>
    );
  }

  return (
    <View style={styles.container(type)}>
      <Button
        type="icon-only"
        icon={type === 'dark' ? 'back-light' : 'back-dark'}
        onPress={onPress}></Button>
      <Text style={styles.title(type)}>{title}</Text>
      <Gap width={24}></Gap>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: type => ({
    paddingHorizontal: 16,
    backgroundColor: type === 'dark' ? colors.primary : colors.white,
    paddingVertical: 30,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomLeftRadius: type === 'dark' ? 20 : 0,
    borderBottomRightRadius: type === 'dark' ? 20 : 0,
  }),
  title: type => ({
    textAlign: 'center',
    textTransform: 'capitalize',
    flex: 1,
    color: type === 'dark' ? colors.white : colors.black,
    fontSize: 20,
    fontFamily: fonts.primary[600],
  }),
});
