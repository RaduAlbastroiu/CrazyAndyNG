import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Home from '../screens/Home';
import Tutorial from '../screens/Tutorial';
import More from '../screens/More';
import HtmlScreen from '../screens/HtmlScreen';

const mainNavigation = {
  Home: {
    screen: Home,
  },
  Tutorial: {
    screen: Tutorial,
  },
  More: {
    screen: More,
    navigationOptions: {
      title: 'More',
    },
  },
  HtmlScreen: {
    screen: HtmlScreen,
    navigationOptions: {
      title: 'Help',
    },
  },
};

const Navigator = createStackNavigator(mainNavigation, {
  defaultNavigationOptions: {
    headerTintColor: '#444',
    headerStyle: {backgroundColor: '#eee'},
  },
});

export default createAppContainer(Navigator);
