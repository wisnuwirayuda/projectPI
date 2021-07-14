import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {Header, ChatItem, InputChat} from '../../components';
import {colors, fonts} from '../../utils';

const Chatting = ({navigation, route}) => {
  const dataDoctor = route.params;

  return (
    <View style={styles.page}>
      <Header
        type="dark-profile"
        title={dataDoctor.data.fullName}
        desc={dataDoctor.data.category}
        photo={{uri: dataDoctor.data.photo}}
        onPress={() => navigation.goBack()}></Header>
      <View style={styles.wrapperChat}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.chatDate}>Senin, 21 Maret, 2020</Text>
          <ChatItem isMe></ChatItem>
          <ChatItem></ChatItem>
          <ChatItem isMe></ChatItem>
          <ChatItem></ChatItem>
          <ChatItem isMe></ChatItem>
          <ChatItem></ChatItem>
          {/* <ChatItem></ChatItem> */}
        </ScrollView>
      </View>
      <InputChat
        value="a"
        onChangeText={() => alert('on change text')}
        onButtonPress={() => alert('on button press')}></InputChat>
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
