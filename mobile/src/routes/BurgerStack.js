import {createStackNavigator} from 'react-navigation-stack';
import AboutUs from '../screens/AboutUs';


const screens = {
  AboutUs: {
    screen: AboutUs,
    navigationOptions: {
      title: 'About Crazy2e',
    },
  },
  
};

const BurgerStack = createStackNavigator(screens);

export default BurgerStack;
