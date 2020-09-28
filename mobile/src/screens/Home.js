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

  const renderTutorial = () => {
    if (showTutorial) {
      return <Tutorial onDone={onDoneTutorial} />;
    } else {
      return (
        <View style={styles.mainContainer}>
          <Text>{t('Home')}</Text>
          <FloatingButton navigation={navigation} />
        </View>
      );
    }
  };

  useEffect(() => {
    isFirstOpen().then((res) => {
      console.log(res);
      setShowTutorial(res);
    });
  }, []);
  return <View style={styles.mainContainer}>{renderTutorial()}</View>;
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Platform.OS === 'ios' ? 20 : 0,
  },
  // appButtonContainer: {
  //   elevation: 8,
  //   backgroundColor: '#009688',
  //   borderRadius: 10,
  //   paddingVertical: 10,
  //   paddingHorizontal: 12,
  //   marginTop: 25,
  //   marginLeft: 50,
  //   marginRight: 50,
  // },
  // appButtonText: {
  //   fontSize: 18,
  //   color: '#fff',
  //   fontWeight: 'bold',
  //   alignSelf: 'center',
  //   textTransform: 'uppercase',
  // },
});

export default Home;
