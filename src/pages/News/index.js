import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {NewsItem, NewsItemHorizontal} from '../../components';
import {colors, fonts, showError} from '../../utils';
import {Gap} from '../../components';
import {DNews1, DNews2, DNews3} from '../../assets';
import {Firebase} from '../../config';

const News = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    Firebase.database()
      .ref('news/')
      .once('value')
      .then(res => {
        console.log('data: ', res.val());
        if (res.val()) {
          setNews(res.val());
        }
      })
      .catch(err => {
        showError(err.message);
      });
  }, []);

  return (
    <View style={styles.page}>
      <View style={styles.page2}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.title}>Your News</Text>
          <View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View style={styles.content}>
                <Gap width={16}></Gap>
                <NewsItemHorizontal></NewsItemHorizontal>
                <NewsItemHorizontal></NewsItemHorizontal>
                <NewsItemHorizontal></NewsItemHorizontal>
              </View>
            </ScrollView>
          </View>
          <Text style={styles.title}>Recommended</Text>
          {news.map(item => {
            return (
              <View>
                <NewsItem
                  title={item.title}
                  pic={item.pic}
                  date={item.date}
                  key={item.id}></NewsItem>
                <Gap height={16}></Gap>
              </View>
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
};

export default News;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.primary,
  },
  page2: {
    backgroundColor: colors.white,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  },
  title: {
    padding: 16,
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
  },
  content: {
    flexDirection: 'row',
  },
});
