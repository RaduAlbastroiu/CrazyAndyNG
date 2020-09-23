import React, {Component} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import ActionButton from 'react-native-action-button';
import burger from '../assets/burger.png';
<Image source={burger} />;
const FloatingButton = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>dddddddddddddddddddddddddddddddddddd dd</Text>
      <ActionButton buttonColor="#329ba8">
        <ActionButton.Item
          hideLabelShadow={false}
          buttonColor="#329ba8"
          title="Terms and Conditions"
          onPress={() => console.log('notes tapped!')}>
          <></>
        </ActionButton.Item>
        <ActionButton.Item
          hideLabelShadow={false}
          buttonColor="#329ba8"
          title="Privacy Policy"
          onPress={() => console.log('notes tapped!')}>
          <></>
        </ActionButton.Item>
        <ActionButton.Item buttonColor="#329ba8" title="FAQ" onPress={() => {}}>
          <></>
        </ActionButton.Item>
        <ActionButton.Item
          buttonColor="#329ba8"
          title="About Us"
          onPress={() => {}}>
          <></>
        </ActionButton.Item>
      </ActionButton>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
  },
});

export default FloatingButton;
