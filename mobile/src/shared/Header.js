import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import burger from '../assets/burger.jpg';

export default function Header({navigation}) {
  const openMenu = () => {
    navigation.openDrawer();
  };

  return (
    <View style={styles.header}>
      <Image source={burger} style={styles.icon} onPress={openMenu} />
      <View>
        <Text style={styles.headerText}>Crazy2e</Text>
      </View>
    </View>
  );
}

//change the style of the header
const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: 50,
    height: 100,
    position: 'absolute',
    left: 0,
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#333',
    letterSpacing: 1,
  },
});
