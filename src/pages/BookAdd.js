import React from 'react';
import { View, StyleSheet, Keyboard } from 'react-native';

import AddBookContainer from '../containers/AddBook';

import Input from '../components/Input';
import Button from '../components/Button';

export default class BookAdd extends React.Component {
  state = {
    title: '',
    author: '',
  };

  onChangeTitle = title => {
    this.setState({ title });
  };

  onChangeAuthor = author => {
    this.setState({ author });
  };

  onChangeCover = cover => {
    this.setState({ cover });
  };

  onAddBook = addBookHandler => {
    const { title, author, cover } = this.state;
    if (title && author) {
      addBookHandler(title, author, cover);
      this.setState({
        title: '',
        author: '',
      });
      Keyboard.dismiss();
      this.props.navigation.goBack();
    }
  };

  render() {
    return (
      <AddBookContainer>
        {addBook => (
          <View style={styles.container}>
            <View style={styles.inputContainer}>
              <Input
                label="Title"
                value={this.state.title}
                onChangeText={this.onChangeTitle}
              />
            </View>
            <View style={styles.inputContainer}>
              <Input
                label="Author"
                value={this.state.author}
                onChangeText={this.onChangeAuthor}
              />
            </View>
            <View style={styles.inputContainer}>
              <Input
                label="Cover URL"
                value={this.state.cover}
                onChangeText={this.onChangeCover}
              />
            </View>
            <View style={styles.buttonContainer}>
              <Button
                title="SAVE"
                onPress={() => this.onAddBook(addBook)}
                disabled={!(this.state.title && this.state.author)}
              />
            </View>
          </View>
        )}
      </AddBookContainer>
    );
  }
}

BookAdd.navigationOptions = {
  title: 'Add Book',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
  inputContainer: {
    paddingTop: 10,
    paddingBottom: 10,
  },
  buttonContainer: {
    marginTop: 20,
  },
});
