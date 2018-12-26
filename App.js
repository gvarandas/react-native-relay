import React from 'react';
import { View, StyleSheet } from 'react-native';
import { createAppContainer } from 'react-navigation';

import AppNavigator from './navigator';

const AppContainer = createAppContainer(AppNavigator);

const App = () => (
  <View style={styles.container}>
    <AppContainer />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
});

export default App;
