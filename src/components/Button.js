import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const Button = ({ title, ...buttonProps }) => (
  <View style={styles.buttonContainer}>
    <TouchableOpacity
      style={styles.button}
      activeOpacity={0.75}
      {...buttonProps}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: 'stretch',
  },
  button: {
    padding: 20,
    backgroundColor: '#385f9e',
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
  },
});

export default Button;
