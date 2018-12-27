import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

import BookDetailContainer from '../containers/Book';
import BookCard from '../components/BookCard';

const BookDetail = ({ navigation }) => {
  const bookId = navigation.getParam('bookId');
  return (
    <BookDetailContainer id={bookId}>
      {book => (
        <SafeAreaView style={styles.container}>
          <BookCard book={book} />
        </SafeAreaView>
      )}
    </BookDetailContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default BookDetail;
