import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import FloatingButton from '../shared/FloatingButton';

export default function AboutUs({navigation}) {
  return (
    <View style={styles.container}>
      <FloatingButton navigation={navigation}/>
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
