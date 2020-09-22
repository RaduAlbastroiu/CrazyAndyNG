import {createDrawerNavigator} from 'react-navigation-drawer';
import {createAppContainer} from 'react-navigation';
import HomeStack from './HomeStack';
import BurgerStack from './BurgerStack';
import FAQ from '../screens/FAQ';
import PrivacyPolicy from '../screens/PrivacyPolicy';
import TermsAndConditions from '../screens/TermsAndConditions';

const RootDrawerNavigator = createDrawerNavigator({
  Home: {
    screen: HomeStack,
  },
  About: {
    screen: BurgerStack,
  },
  FAQ: {
    screen: FAQ,
    navigationOptions: {
      title: 'FAQ',
    },
  },
  PrivacyPolicy: {
    screen: PrivacyPolicy,
    navigationOptions: {
      title: 'Privacy Policy',
    },
  },
  TermsAndConditions: {
    screen: TermsAndConditions,
    navigationOptions: {
      title: 'Terms & Conditions',
    },
  },
});

export default createAppContainer(RootDrawerNavigator);
