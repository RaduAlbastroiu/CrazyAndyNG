import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Home from '../screens/Home';
import Tutorial from '../screens/Tutorial';
import More from '../screens/More';
import HtmlScreen from '../screens/HtmlScreen';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={({navigation}) => ({
          title: 'Awesome app',
          headerRight: () => (
            <Button
              onPress={() => {
                console.log('pressed');
              }}
              title="Learn More"
              color="#841584"
              accessibilityLabel="Learn more about this purple button"
            />
          ),
        })}
      />
      <Stack.Screen name="Tutorial" component={Tutorial} />
      <Stack.Screen name="More" component={More} />
      <Stack.Screen name="HtmlScreen" component={HtmlScreen} />
    </Stack.Navigator>
  );
}

export default MyStack;
