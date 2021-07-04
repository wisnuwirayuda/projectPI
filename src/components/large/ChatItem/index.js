import React from 'react';
import {StyleSheet} from 'react-native';
import IsMe from './IsMe';
import Other from './Other';

const ChatItem = ({isMe}) => {
  if (isMe) {
    return <IsMe></IsMe>;
  }
  return <Other></Other>;
};

export default ChatItem;

const styles = StyleSheet.create({});
