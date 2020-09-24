import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function AboutUs({navigation}) {
  return (
    <View style={styles.container}>
<Text>About Us </Text>    
</View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor:'#fff'
  },
});
