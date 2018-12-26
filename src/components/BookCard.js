import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const BookCard = ({ book }) => (
  <View style={[styles.cardContainer, styles.hasShadow]}>
    <View>
      <Image style={styles.cover} source={{ uri: book.cover }} />
    </View>
    <View style={styles.bookInfoContainer}>
      <Text style={styles.title}>{book.title}</Text>
      <Text style={styles.author}>by {book.author}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    margin: 15,
    padding: 15,
    borderWidth: 1,
    borderColor: '#666',
    borderRadius: 5,
  },
  hasShadow: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
  },
  bookInfoContainer: {
    marginLeft: 10,
    flex: 1,
  },
  title: {
    fontSize: 20,
  },
  author: {
    marginTop: 5,
    fontStyle: 'italic',
  },
  cover: {
    width: 60,
    height: 100,
  },
});

export default BookCard;
