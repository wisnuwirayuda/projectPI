import React from 'react';
import {StyleSheet} from 'react-native';
import IsMe from './IsMe';
import Other from './Other';

const ChatItem = ({isMe, text, date, photo}) => {
  if (isMe) {
    return <IsMe text={text} date={date}></IsMe>;
  }
  return <Other text={text} date={date} photo={photo}></Other>;
};

export default ChatItem;

const styles = StyleSheet.create({});
