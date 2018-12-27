import React from 'react';
import { Text } from 'react-native';
import { graphql, QueryRenderer } from 'react-relay';

import environment from '../../environment';

const booksQuery = graphql`
  query BookQuery($id: String!) {
    book(id: $id) {
      id
      title
      author
      cover
    }
  }
`;

const Book = ({ children, id }) => (
  <QueryRenderer
    environment={environment}
    query={booksQuery}
    variables={{ id }}
    render={({ error, props }) => {
      if (error) {
        return <Text>Error!</Text>;
      }
      if (!props) {
        return <Text>Loading...</Text>;
      }
      return children(props.book);
    }}
  />
);

export default Book;
