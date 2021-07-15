import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {Header, ChatItem, InputChat} from '../../components';
import {colors, fonts, getChatTime, getData, setDateChat} from '../../utils';
import {Firebase} from '../../config';

const Chatting = ({navigation, route}) => {
  const dataDoctor = route.params;
  const [chatContent, setChatContent] = useState('');
  const [user, setUser] = useState({});

  useEffect(() => {
    getData('user').then(res => {
      console.log('User login: ', res);
      setUser(res);
    });
  }, []);

  const chatSend = () => {
    const today = new Date();
    const data = {
      sendBy: user.uid,
      chatDate: today.getTime(),
      chatTime: getChatTime(today),
      chatContent: chatContent,
    };

    const chatID = `${user.uid}_${dataDoctor.data.uid}`;
    const urlFirebase = `chatting/${chatID}/allChat/${setDateChat(today)}`;

    setChatContent('');

    Firebase.database()
      .ref(urlFirebase)
      .push(data)
      .then(res => {
        console.log(setChatContent(''));
      })
      .catch(err => {
        console.log('Error: ', err);
      });
  };

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
        value={chatContent}
        onChangeText={value => setChatContent(value)}
        onButtonPress={chatSend}></InputChat>
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
