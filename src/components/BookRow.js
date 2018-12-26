import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const BookRow = ({ title, author, onPress }) => (
  <TouchableOpacity onPress={onPress} activeOpacity={0.4}>
    <View style={styles.row}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.author}>by {author}</Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  row: {
    borderBottomWidth: 1,
    padding: 10,
    marginLeft: 10,
    borderColor: '#666',
  },
  title: {
    fontSize: 15,
    fontWeight: '500',
  },
  author: {
    fontStyle: 'italic',
  },
});

export default BookRow;
