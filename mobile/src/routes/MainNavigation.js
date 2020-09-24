import {createDrawerNavigator} from 'react-navigation-drawer';
import {createAppContainer} from 'react-navigation';
import HomeStack from './HomeStack';
import FAQ from '../screens/FAQ';
import PrivacyPolicy from '../screens/PrivacyPolicy';
import TermsAndConditions from '../screens/TermsAndConditions';
import More from '../screens/More';
import Home from '../screens/Home'

const mainNavigation = createDrawerNavigator({
  Home: {
    screen: HomeStack,
  },
  More: {
    screen: More,
    navigationOptions: {
      title: 'More',
    },
  }
  
});

export default createAppContainer(mainNavigation);
