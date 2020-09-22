import Home from '../screens/Home';
import {createStackNavigator} from 'react-navigation-stack';
import Tutorial from '../screens/Tutorial';
import TutorialTwo from '../screens/TutorialTwo';
import TutorialThree from '../screens/TutorialThree';
import TutorialFour from '../screens/TutorialFour';

const screens = {
  Home: {
    screen: Home,
  },
  Tutorial: {
    screen: Tutorial,
  },
  TutorialTwo: {
    screen: TutorialTwo,
    navigationOptions: {
      title: 'Tutorial',
    },
  },
  TutorialThree: {
    screen: TutorialThree,
    navigationOptions: {
      title: 'Tutorial',
    },
  },
  TutorialFour: {
    screen: TutorialFour,
    navigationOptions: {
      title: 'Tutorial',
    },
  },
};

const HomeStack = createStackNavigator(screens);

export default HomeStack;
