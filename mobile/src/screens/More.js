import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

export default function More({navigation}) {
    return (
        <View>

  <TouchableOpacity
        onPress={    navigation.navigate('About Us')}
        style={styles.appButtonContainer}>
        <Text style={styles.appButtonText}>About Us</Text>
      </TouchableOpacity>       
      
<TouchableOpacity
        onPress={    navigation.navigate('FAQ')}
        style={styles.appButtonContainer}>
        <Text style={styles.appButtonText}>FAQ</Text>
      </TouchableOpacity>       
      <TouchableOpacity
        onPress={    navigation.navigate('TermsAndConditions')}
        style={styles.appButtonContainer}>
        <Text style={styles.appButtonText}>Terms and Conditions</Text>
      </TouchableOpacity>       

      <TouchableOpacity
        onPress={    navigation.navigate('PrivacyPolicy')}
        style={styles.appButtonContainer}>
        <Text style={styles.appButtonText}>Privacy</Text>
      </TouchableOpacity>       
       </View>
    )
}

const styles=StyleSheet.create({


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
})