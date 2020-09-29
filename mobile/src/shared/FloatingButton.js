import React from 'react';
import {View} from 'react-native';
import {FloatingAction} from 'react-native-floating-action';

const FloatingButton = ({navigation}) => {
  const navigateToMore = () => {
    navigation.navigate('More');
  };

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
      name: navigateToMore,
      position: 4,
    },
  ];

  return (
    <FloatingAction
      actions={actions}
      onPressItem={(name) => {
        name();
      }}
    />
  );
};

export default FloatingButton;
