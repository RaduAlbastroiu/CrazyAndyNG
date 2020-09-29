import {NativeModules, Platform} from 'react-native';
import i18n from 'i18next';
import en from '../languages/en';
import yue_HK from '../languages/yue_HK';
import {initReactI18next} from 'react-i18next';

const deviceLanguage =
  Platform.OS === ' iOS'
    ? NativeModules.SettingsManager.settings.AppleLocale ||
      NativeModules.SettingsManager.settings.AppleLanguages[0] // iOS 13
    : NativeModules.I18nManager.localeIdentifier;

console.log(deviceLanguage);

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en,
      yue_HK,
    },

    lng: deviceLanguage,
    fallbackLng: 'en_US',

    interpolation: {
      escapeValue: false,
    },
  });

export default deviceLanguage;
