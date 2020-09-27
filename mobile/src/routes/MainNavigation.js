import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Home from '../screens/Home';
import Tutorial from '../screens/Tutorial';
import FAQ from '../screens/FAQ';
import PrivacyPolicy from '../screens/PrivacyPolicy';
import TermsAndConditions from '../screens/TermsAndConditions';
import More from '../screens/More';
import AboutUs from '../screens/AboutUs';

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
    screen: AboutUs,
    navigationOptions: {
      title: 'About Us',
    },
  },
  Terms: {
    screen: TermsAndConditions,
    navigationOptions: {
      title: 'Terms and Conditions',
    },
  },
};

const Navigator = createStackNavigator(mainNavigation, {
  defaultNavigationOptions: {
    headerTintColor: '#444',
    headerStyle: {backgroundColor: '#eee', height: 60},
  },
});

export default createAppContainer(Navigator);
