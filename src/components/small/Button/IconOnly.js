import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {IBackDark, IBackLight} from '../../../assets';

const IconOnly = ({onPress, icon}) => {
  const Icon = () => {
    if (icon === 'back-dark') {
      return <IBackDark></IBackDark>;
    }
    if (icon === 'back-light') {
      return <IBackLight></IBackLight>;
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
