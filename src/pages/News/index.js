import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {NewsItem, NewsItemHorizontal} from '../../components';
import {colors, fonts} from '../../utils';
import {Gap} from '../../components';
import {DNews1, DNews2, DNews3} from '../../assets';

const News = () => {
  const [news, setNews] = useState([
    {
      id: 1,
      tittle: 'Is it safe to stay at home during coronavirus?',
      date: 'Today',
      pic: DNews1,
    },
    {
      id: 2,
      tittle: 'Consume yellow citrus helps you healthier',
      date: 'Today',
      pic: DNews2,
    },
    {
      id: 3,
      tittle: 'Learn how to make a proper orange juice at home',
      date: 'Today',
      pic: DNews3,
    },
    {
      id: 4,
      tittle: 'Is it safe to stay at home during coronavirus?',
      date: 'Today',
      pic: DNews1,
    },
    {
      id: 5,
      tittle: 'Consume yellow citrus helps you healthier',
      date: 'Today',
      pic: DNews2,
    },
    {
      id: 6,
      tittle: 'Learn how to make a proper orange juice at home',
      date: 'Today',
      pic: DNews3,
    },
  ]);

  return (
    <View style={styles.page}>
      <View style={styles.page2}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.tittle}>Your News</Text>
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
          <Text style={styles.tittle}>Recommended</Text>
          {news.map(item => {
            return (
              <View key={item.id}>
                <NewsItem
                  pic={item.pic}
                  tittle={item.tittle}
                  date={item.date}></NewsItem>
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
  tittle: {
    padding: 16,
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
  },
  content: {
    flexDirection: 'row',
  },
});
