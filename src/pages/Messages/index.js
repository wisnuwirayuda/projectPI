import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {ListDoctor} from '../../components';
import {colors, fonts} from '../../utils';

const Messages = () => {
  return (
    <View style={styles.page}>
      <View style={styles.content}>
        <Text style={styles.tittle}>Messages</Text>
        <ListDoctor
          list="list1"
          name="Alexander Jannie"
          desc="Baik ibu, terima kasih banyak atas wakt..."></ListDoctor>
        <ListDoctor
          list="list2"
          name="Nairobi Putri Hayza"
          desc="Oh tentu saja tidak karena jeruk it..."></ListDoctor>
        <ListDoctor
          list="list3"
          name="John McParker Steve"
          desc="Oke menurut pak dokter bagaimana unt..."></ListDoctor>
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
