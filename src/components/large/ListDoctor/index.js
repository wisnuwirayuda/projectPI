import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {DDoctor4, DDoctor5, DDoctor6} from '../../../assets';
import {colors, fonts} from '../../../utils';

const ListDoctor = ({list}) => {
  const Photo = () => {
    if (list === 'list1') {
      return <Image source={DDoctor4} style={styles.avatar}></Image>;
    } else if (list === 'list2') {
      return <Image source={DDoctor5} style={styles.avatar}></Image>;
    } else if (list === 'list3') {
      return <Image source={DDoctor6} style={styles.avatar}></Image>;
    } else {
      return <Image source={DDoctor4} style={styles.avatar}></Image>;
    }
  };
  return (
    <View style={styles.container}>
      <Photo></Photo>
      <View>
        <Text style={styles.name}>Alexander Jannie</Text>
        <Text style={styles.chat}>
          Baik ibu, terima kasih banyak atas wakt...
        </Text>
      </View>
    </View>
  );
};

export default ListDoctor;

const styles = StyleSheet.create({
  avatar: {
    width: 46,
    height: 46,
    borderRadius: 46 / 2,
    marginRight: 12,
  },
  container: {
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
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
