import React from 'react';
import { View, TextInput, StyleSheet, Animated } from 'react-native';

const BLUE = '#428AF8';
const BLACKISH = '#4E4E4F';

export default class Input extends React.Component {
  state = {
    isFocused: false,
    color: new Animated.Value(1),
    size: new Animated.Value(12),
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
    const { label, ...inputProps } = this.props;
    const colorFrom = !isFocused ? BLUE : BLACKISH;
    const colorTo = isFocused ? BLUE : BLACKISH;
    const labelSize = isFocused ? 14 : 12;

    const inputFocusColor = this.state.color.interpolate({
      inputRange: [0, 1],
      outputRange: [colorFrom, colorTo],
    });
    Animated.timing(this.state.size, {
      toValue: labelSize,
      duration: 200,
    }).start();

    return (
      <View style={styles.container}>
        <TextInput
          style={[styles.input]}
          underlineColorAndroid="transparent"
          {...inputProps}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
        />
        <Animated.View
          style={[styles.separator, { borderBottomColor: inputFocusColor }]}
        />
        {label && (
          <Animated.Text
            style={[
              styles.label,
              { color: inputFocusColor, fontSize: this.state.size },
            ]}
          >
            {label}
          </Animated.Text>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 15,
    marginRight: 15,
    height: 65,
  },
  input: {
    fontSize: 16,
    height: 40,
  },
  separator: {
    height: 5,
    borderBottomWidth: 0.3,
  },
  label: {
    marginTop: 10,
  },
});
