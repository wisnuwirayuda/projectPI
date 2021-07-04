import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Header, ChatItem, InputChat} from '../../components';
import {colors, fonts} from '../../utils';

const Chatting = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header
        type="dark-profile"
        title="Nairobi Putri Hayza"
        onPress={() => navigation.goBack()}></Header>
      <View style={styles.wrapperChat}>
        <Text style={styles.chatDate}>Senin, 21 Maret, 2020</Text>
        <ChatItem isMe></ChatItem>
        <ChatItem></ChatItem>
        {/* <ChatItem></ChatItem> */}
      </View>
      <InputChat></InputChat>
    </View>
  );
};

export default Chatting;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    flex: 1,
  },
  wrapperChat: {
    flex: 1,
  },
  chatDate: {
    marginVertical: 20,
    textAlign: 'center',
    fontSize: 11,
    color: colors.text.secondary,
    fontFamily: fonts.primary[400],
  },
});
