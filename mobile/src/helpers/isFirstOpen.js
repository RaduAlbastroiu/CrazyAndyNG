import AsyncStorage from '@react-native-community/async-storage';

const isFirstOpen = async () => {
  // await removeData();
  if ((await getData()) === false) {
    return true;
  }
  return false;
};

const setFirstOpen = async () => {
  try {
    await AsyncStorage.setItem('tutorialShown', 'yes');
  } catch (e) {
    console.log(e);
  }
};

const getData = async () => {
  try {
    const value = await AsyncStorage.getItem('tutorialShown');

    if (value === 'yes') {
      return true;
    }
    return false;
  } catch (e) {
    console.log(e);
  }
};

const removeData = async () => {
  try {
    await AsyncStorage.removeItem('key');
  } catch (e) {}
  console.log('data removed');
};

module.exports.isFirstOpen = isFirstOpen;
module.exports.setFirstOpen = setFirstOpen;
