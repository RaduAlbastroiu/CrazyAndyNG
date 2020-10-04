import {View, Text, StyleSheet, Platform} from 'react-native';
import React, {useState, useEffect} from 'react';
import FloatingButton from '../shared/FloatingButton';
import {useTranslation} from 'react-i18next';
import Tutorial from './Tutorial';
import isFirstOpen from '../helpers/isFirstOpen';

const Home = ({navigation}) => {
  const [showTutorial, setShowTutorial] = useState(false);
  const {t} = useTranslation();

  const onDoneTutorial = () => {
    setShowTutorial(false);
    console.log('done');
  };

  useEffect(() => {
    isFirstOpen().then((res) => {
      setShowTutorial(res);
    });
  }, []);

  return (
    <View style={styles.mainContainer}>
      {showTutorial === false ? (
        <Tutorial onDone={onDoneTutorial} />
      ) : (
        <FloatingButton navigation={navigation} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
});

export default Home;
