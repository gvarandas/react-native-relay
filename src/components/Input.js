import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const BLUE = '#428AF8';
const LIGHT_GRAY = '#D3D3D3';

export default class Input extends React.Component {
  state = {
    isFocused: false,
  };

  handleFocus = event => {
    this.setState({ isFocused: true });
    if (this.props.onFocus) {
      this.props.onFocus(event);
    }
  };

  handleBlur = event => {
    this.setState({ isFocused: false });
    if (this.props.onBlur) {
      this.props.onBlur(event);
    }
  };

  render() {
    const { isFocused } = this.state;
    // eslint-disable-next-line no-unused-vars
    const { onFocus, onBlur, ...otherProps } = this.props;

    return (
      <TextInput
        style={styles.input}
        selectionColor={BLUE}
        underlineColorAndroid={isFocused ? BLUE : LIGHT_GRAY}
        onFocus={this.handleFocus}
        onBlur={this.handleBlur}
        {...otherProps}
      />
    );
  }
}

const styles = StyleSheet.create({
  input: {
    fontSize: 16,
    height: 40,
    paddingLeft: 10,
  },
});
