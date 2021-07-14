import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Header, List} from '../../components';
import {Firebase} from '../../config';
import {colors, fonts} from '../../utils';

const ChooseDoctor = ({navigation, route}) => {
  const [listDoctor, setListDoctor] = useState([]);
  const itemCategory = route.params;
  useEffect(() => {
    console.log('Category: ', itemCategory.category);
    callDoctorByCategory(itemCategory.category);
  }, []);

  const callDoctorByCategory = category => {
    Firebase.database()
      .ref('doctors/')
      .orderByChild('category')
      .equalTo(category)
      .once('value')
      .then(res => {
        if (res.val()) {
          const oldData = res.val();
          const data = [];
          Object.keys(oldData).map(key => {
            console.log('Value: ', key);
            data.push({
              id: key,
              data: oldData[key],
            });
          });
          console.log('parse list doctors: ', data);
          setListDoctor(data);
        }
      });
  };

  return (
    <View style={styles.page}>
      <Header
        type="dark"
        title={`Pilih ${itemCategory.category}`}
        onPress={() => navigation.goBack()}></Header>
      {listDoctor.map(doctor => {
        return (
          <List
            type="next"
            key={doctor.id}
            name={doctor.data.fullName}
            desc={doctor.data.gender}
            photo={{uri: doctor.data.photo}}
            onPress={() => navigation.navigate('Chatting')}></List>
        );
      })}
    </View>
  );
};

export default ChooseDoctor;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    flex: 1,
  },
});
