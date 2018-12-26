import React from 'react';
import { Text } from 'react-native';
import { graphql, QueryRenderer } from 'react-relay';

import environment from '../../environment';

const booksQuery = graphql`
  query BooksQuery {
    books {
      id
      author
      title
    }
  }
`;

const Books = ({ children }) => (
  <QueryRenderer
    environment={environment}
    query={booksQuery}
    variables={{}}
    render={({ error, props }) => {
      if (error) {
        return <Text>Error!</Text>;
      }
      if (!props) {
        return <Text>Loading...</Text>;
      }
      return children(props.books);
    }}
  />
);

export default Books;