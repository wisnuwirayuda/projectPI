import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {List} from '../../components';
import {colors, fonts, getData} from '../../utils';
import {Firebase} from '../../config';

const Messages = ({navigation}) => {
  const [user, setUser] = useState({});
  const [historyChat, setHistoryChat] = useState([]);

  useEffect(() => {
    getDataUserFromLocal();
    const urlHistory = `messages/${user.uid}`;
    Firebase.database()
      .ref(urlHistory)
      .on('value', snapshot => {
        console.log('Data History: ', snapshot.val());
        if (snapshot.val()) {
          const oldData = snapshot.val();
          const data = [];
          Object.keys(oldData).map(key => {
            data.push({
              id: key,
              data: oldData[key],
            });
          });
          setHistoryChat(data);
        }
      });
  }, [user.uid]);

  const getDataUserFromLocal = () => {
    getData('user').then(res => {
      setUser(res);
    });
  };
  return (
    <View style={styles.page}>
      <View style={styles.content}>
        <Text style={styles.tittle}>Messages</Text>
        {historyChat.map(chat => {
          return (
            <List
              list="list1"
              key={chat.id}
              name={chat.data.uidPartner}
              desc={chat.data.lastContentChat}
              onPress={() => navigation.navigate('Chatting')}></List>
          );
        })}
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
