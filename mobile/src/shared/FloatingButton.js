import React from 'react';
import {FloatingAction} from 'react-native-floating-action';

const FloatingButton = ({navigation}) => {
  const actions = [
    {
      text: 'Scan',
      icon: require('../assets/scan.png'),
      name: 'Scan',
      position: 1,
    },
    {
      text: 'History',
      icon: require('../assets/history.png'),
      name: 'History',
      position: 2,
    },
    {
      text: 'Feedback',
      icon: require('../assets/plus.png'),
      name: 'Feedback',
      position: 3,
    },
    {
      text: 'More',
      icon: require('../assets/more.png'),
      name: 'More',
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
