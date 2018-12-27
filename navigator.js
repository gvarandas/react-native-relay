import { createStackNavigator } from 'react-navigation';

import BookList from './src/pages/BookList';
import BookDetail from './src/pages/BookDetail';
import BookAdd from './src/pages/BookAdd';

const AppNavigator = createStackNavigator({
  BookList,
  BookDetail,
  BookAdd,
});

export default AppNavigator;
