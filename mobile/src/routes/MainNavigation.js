import {createDrawerNavigator} from 'react-navigation-drawer';
import {createAppContainer} from 'react-navigation';
import HomeStack from './HomeStack';
import FAQ from '../screens/FAQ';
import PrivacyPolicy from '../screens/PrivacyPolicy';
import TermsAndConditions from '../screens/TermsAndConditions';
import More from '../screens/More';
import AboutUs from '../screens/AboutUs'

const mainNavigation = createDrawerNavigator({
  Home: {
    screen: HomeStack,
  },
 
  More: {
    screen: More,
    navigationOptions: {
      title: 'More',
    },
  },
  Privacy: {
    screen: PrivacyPolicy,
    navigationOptions: {
      title: 'Privacy Policy',
    },
  },
  FAQ: {
    screen: FAQ,
    navigationOptions: {
      title: 'FAQ',
    },
  },
  About: {
    screen:AboutUs,
    navigationOptions: {
      title: 'About Us',
    },
  },
  Terms: {
    screen:TermsAndConditions,
    navigationOptions: {
      title: 'Terms and Conditions',
    },
  },
});

export default createAppContainer(mainNavigation);
