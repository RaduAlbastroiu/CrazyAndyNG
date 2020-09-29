import React from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import HtmlScreen from './HtmlScreen';
import Tutorial from './Tutorial';

export default function More({navigation}) {
  const renderHelpButton = (displayName, screenName, screen) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate(screen, {screen: screenName})}
        style={styles.appButtonContainer}>
        <Text style={styles.appButtonText}>{displayName}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View>
      {renderHelpButton('About Us', 'about', 'HtmlScreen')}
      {renderHelpButton('FAQ', 'faq', 'HtmlScreen')}
      {renderHelpButton('Terms and Conditions', 'terms', 'HtmlScreen')}
      {renderHelpButton('Privacy Policy', 'privacy', 'HtmlScreen')}
      {renderHelpButton('Tutorial', 'Tutorial', 'Tutorial')}
    </View>
  );
}

const styles = StyleSheet.create({
  appButtonContainer: {
    elevation: 8,
    backgroundColor: '#009688',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginTop: 25,
    marginLeft: 50,
    marginRight: 50,
  },

  appButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
  },
});
