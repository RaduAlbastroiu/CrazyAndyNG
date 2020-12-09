import React from 'react';
import {FloatingAction} from 'react-native-floating-action';
import {setShowBarcode} from '../redux/actions/navigationActions';
import {useDispatch} from 'react-redux';

const FloatingButton = ({navigation}) => {
  const actions = [
    {
      text: 'Scan',
      icon: require('../assets/scan.png'),
      name: 'Scan',
      color: 'white',
      tintColor: 'black',
      position: 1,
    },
    {
      text: 'Favorites',
      icon: require('../assets/fav_icon_empty.png'),
      name: 'Favorites',
      color: 'white',
      tintColor: 'black',
      position: 2,
    },
    {
      text: 'Comparison',
      icon: require('../assets/compare.png'),
      name: 'Comparison',
      color: 'white',
      tintColor: 'black',
      position: 3,
    },
    {
      text: 'Feedback',
      icon: require('../assets/feedback.png'),
      name: 'Feedback',
      color: 'white',
      tintColor: 'black',
      position: 4,
    },
    {
      text: 'More',
      icon: require('../assets/more.png'),
      name: 'More',
      color: 'white',
      tintColor: 'black',
      position: 5,
    },
  ];

  const dispatch = useDispatch();

  return (
    <FloatingAction
      color="#12d8c2"
      actions={actions}
      onPressItem={(name) => {
        if (name === 'Favorites') {
          navigation.navigate(name);
        } else {
          if (name === 'Scan') {
            dispatch(setShowBarcode(true));
            navigation.navigate('Home');
          } else {
            if (name === 'Feedback') {
              navigation.navigate('Feedback');
            } else {
              if (name === 'Comparison') {
                navigation.navigate('Comparison');
              } else {
                navigation.navigate('More');
              }
            }
          }
        }
      }}
    />
  );
};

export default FloatingButton;
