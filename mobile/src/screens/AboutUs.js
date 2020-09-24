import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import FloatingButton from '../shared/FloatingButton';

export default function AboutUs() {
  return (
    <View style={styles.container}>
      <FloatingButton />
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
