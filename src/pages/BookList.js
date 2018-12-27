import React from 'react';
import { SafeAreaView, StyleSheet, FlatList } from 'react-native';

import BooksContainer from '../containers/Books';
import BookRow from '../components/BookRow';
import Button from '../components/Button';

const BookList = ({ navigation }) => (
  <BooksContainer>
    {books => (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={books}
          renderItem={({ item: { id, author, title } }) => (
            <BookRow
              key={id}
              author={author}
              title={title}
              onPress={() =>
                navigation.navigate('BookDetail', {
                  bookId: id,
                })
              }
            />
          )}
          contentContainerStyle={styles.list}
          keyExtractor={item => item.id}
        />
        <Button
          title="ADD BOOK"
          onPress={() => navigation.navigate('BookAdd')}
        />
      </SafeAreaView>
    )}
  </BooksContainer>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    alignItems: 'stretch',
  },
});

export default BookList;
