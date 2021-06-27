import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {IBackDark} from '../../../assets';

const IconOnly = ({onPress, icon}) => {
  const Icon = () => {
    if (icon === 'back-dark') {
      return <IBackDark></IBackDark>;
    }
    if (icon === 'back-light') {
      return <IBackDark></IBackDark>;
    }
    return <IBackDark></IBackDark>;
  };
  return (
    <TouchableOpacity onPress={onPress}>
      <Icon></Icon>
    </TouchableOpacity>
  );
};

export default IconOnly;

const styles = StyleSheet.create({});
