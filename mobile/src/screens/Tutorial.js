import React from 'react';
import {View, Image, Text} from 'react-native';
import AboutUs from './AboutUs';
import FAQ from './FAQ';
import PrivacyPolicy from './PrivacyPolicy';
import TermsAndConditions from './TermsAndConditions';

const Tutorial = () => {
  return (
    <View>
      <Text> Go to Tutorial Screen</Text>


      <AboutUs />
       <FAQ />
      <PrivacyPolicy />
      <TermsAndConditions />  
    </View>
  );
};

export default Tutorial;
