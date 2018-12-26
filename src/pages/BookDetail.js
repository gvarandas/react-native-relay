import React from 'react';

import BookDetailContainer from '../containers/Book';
import BookCard from '../components/BookCard';

const BookDetail = ({ navigation }) => {
  const bookId = navigation.getParam('bookId');
  return (
    <BookDetailContainer id={bookId}>
      {book => <BookCard book={book} />}
    </BookDetailContainer>
  );
};

export default BookDetail;
