import React, {Component} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import ActionButton from 'react-native-action-button';
import burger from '../assets/burger.png';

const FloatingButton = () => {
 
    
      return (
        <View style={{flex:1, backgroundColor: '#f3f3f3'}}>
          {/* Rest of the app comes ABOVE the action button component !*/}
          <ActionButton buttonColor="rgba(231,76,60,1)"onPress={()=>console.log('Mergi FMM')}>
            <ActionButton.Item buttonColor='#9b59b6' title="New Task" onPress={() => console.log("notes tapped!")}>
            <Image source={burger} style={styles.actionButtonIcon} />
            </ActionButton.Item>
            <ActionButton.Item buttonColor='#3498db' title="Notifications" onPress={() => {}}>
            <Image source={burger} style={styles.actionButtonIcon} />
            </ActionButton.Item>
            <ActionButton.Item buttonColor='#1abc9c' title="All Tasks" onPress={() => {}}>
            <Image source={burger} style={styles.actionButtonIcon} />
            </ActionButton.Item>
          </ActionButton>
        </View>
      );
    
   
  }
   
  const styles = StyleSheet.create({
    actionButtonIcon: {
flex:1,      fontSize: 20,
      height: 22,
      color: 'white',
    },
  });

  export default FloatingButton;

