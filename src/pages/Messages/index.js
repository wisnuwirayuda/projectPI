import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {ListDoctor} from '../../components';
import {colors, fonts} from '../../utils';

const Messages = () => {
  return (
    <View style={styles.page}>
      <View style={styles.content}>
        <Text style={styles.tittle}>Messages</Text>
        <ListDoctor list="list1"></ListDoctor>
        <ListDoctor list="list2"></ListDoctor>
        <ListDoctor list="list3"></ListDoctor>
      </View>
    </View>
  );
};

export default Messages;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.primary,
    flex: 1,
  },
  content: {
    backgroundColor: colors.white,
    flex: 1,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  },
  tittle: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    marginLeft: 16,
    marginTop: 30,
  },
});
