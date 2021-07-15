import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {Header, ChatItem, InputChat} from '../../components';
import {colors, fonts, getData} from '../../utils';
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
    const hour = today.getHours();
    const minutes = today.getMinutes();
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const date = today.getDate();

    const data = {
      sendBy: user.uid,
      chatDate: new Date().getTime(),
      chatTime: `${hour}:${minutes} ${hour > 12 ? 'PM' : 'AM'}`,
      chatContent: chatContent,
    };
    console.log('Data Chat: ', data);
    console.log(
      'URL Firebase: ',
      `chatting/${user.uid}_${dataDoctor.data.uid}/allChat/${year}-${month}-${date}`,
    );
    setChatContent('');

    // Kirim ke firebase
    Firebase.database()
      .ref(
        `chatting/${user.uid}_${dataDoctor.data.uid}/allChat/${year}-${month}-${date}`,
      )
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
