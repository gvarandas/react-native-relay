import { createStackNavigator } from 'react-navigation';

import BookList from './src/pages/BookList';
import BookDetail from './src/pages/BookDetail';

const AppNavigator = createStackNavigator({
  BookList,
  BookDetail,
});

export default AppNavigator;
