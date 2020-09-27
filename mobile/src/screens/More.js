import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

export default function More({navigation}) {
  const renderHelpButton = (displayName, screenName) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('HtmlScreen', {screen: screenName})}
        style={styles.appButtonContainer}>
        <Text style={styles.appButtonText}>{displayName}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View>
      {renderHelpButton('About Us', 'about')}
      {renderHelpButton('FAQ', 'faq')}
      {renderHelpButton('Terms and Conditions', 'terms')}
      {renderHelpButton('Privacy Policy', 'privacy')}
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
