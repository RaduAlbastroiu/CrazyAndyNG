import React from 'react';
import {FloatingAction} from 'react-native-floating-action';

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
      text: 'History',
      icon: require('../assets/history.png'),
      name: 'History',
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

  return (
    <FloatingAction
      color="#12d8c2"
      actions={actions}
      onPressItem={(name) => {
        navigation.navigate('More');
      }}
    />
  );
};

export default FloatingButton;
