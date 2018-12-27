import { graphql, commitMutation } from 'react-relay';

import environment from '../../environment';

const AddBookMutation = graphql`
  mutation AddBookMutation($title: String!, $author: String!, $cover: String) {
    addBook(title: $title, author: $author, cover: $cover) {
      id
      title
      author
      cover
    }
  }
`;

function commit(title, author, cover) {
  return commitMutation(environment, {
    mutation: AddBookMutation,
    variables: {
      title,
      author,
      cover,
    },
    updater: store => {
      const newBook = store.getRootField('addBook');
      const root = store.getRoot();
      const bookList = root.getLinkedRecords('books');
      const updatedBookList = bookList.concat([newBook]);
      root.setLinkedRecords(updatedBookList, 'books');
    },
  });
}

const AddBook = ({ children }) => children(commit);

export default AddBook;
