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
      text: 'Feedback',
      icon: require('../assets/plus.png'),
      name: 'Feedback',
      color: 'white',
      tintColor: 'black',
      position: 3,
    },
    {
      text: 'More',
      icon: require('../assets/more.png'),
      name: 'More',
      color: 'white',
      tintColor: 'black',
      position: 4,
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
            navigation.navigate('More');
          }
        }
      }}
    />
  );
};

export default FloatingButton;
