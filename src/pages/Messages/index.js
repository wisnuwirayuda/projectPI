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
    const rootDB = Firebase.database().ref();
    const urlHistory = `messages/${user.uid}`;
    const messagesDB = rootDB.child(urlHistory);

    messagesDB.on('value', async snapshot => {
      console.log('Data History: ', snapshot.val());
      if (snapshot.val()) {
        const oldData = snapshot.val();
        const data = [];

        const promises = await Object.keys(oldData).map(async key => {
          const urlUidDoctor = `doctors/${oldData[key].uidPartner}`;
          const detailDoctor = await rootDB.child(urlUidDoctor).once('value');

          data.push({
            id: key,
            detailDoctor: detailDoctor.val(),
            data: oldData[key],
          });
        });
        await Promise.all(promises);
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
              key={chat.id}
              name={chat.detailDoctor.fullName}
              photo={{uri: chat.detailDoctor.photo}}
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
