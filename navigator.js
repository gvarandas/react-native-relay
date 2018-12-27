import { createStackNavigator } from 'react-navigation';

import BookList from './src/pages/BookList';
import BookDetail from './src/pages/BookDetail';
import BookAdd from './src/pages/BookAdd';

const AppNavigator = createStackNavigator({
  BookList: {
    screen: BookList,
    navigationOptions: {
      title: 'Book List',
    },
  },
  BookDetail: {
    screen: BookDetail,
    navigationOptions: {
      title: 'Book Detail',
    },
  },
  BookAdd,
});

export default AppNavigator;
