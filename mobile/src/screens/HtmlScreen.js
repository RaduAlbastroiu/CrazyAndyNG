import React from 'react';
import {
  View,
  ActivityIndicator,
  ScrollView,
  useWindowDimensions,
  Linking,
} from 'react-native';
import useHelp from '../hooks/useHelp';
import HTML from 'react-native-render-html';

const htmlContent = `<h3>關於我們 About us</h3><p><a href="mailto:crazy2e.biz@gmail.com">crazy2e.biz@gmail.com</a></p>`;

export default function HtmlScreen({route, navigation}) {
  const {params} = route;
  const {isLoading, data} = useHelp(params.screen);

  const windowDimension = useWindowDimensions().width;

  const renderLoading = () => {
    if (isLoading) {
      return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      );
    }
    return (
      <ScrollView style={{flex: 1, paddingHorizontal: 10}}>
        <HTML
          html={data.htmlContent}
          contentWidth={windowDimension}
          onLinkPress={(evt, href) => {
            console.log(href);
            Linking.openURL(href);
          }}
        />
      </ScrollView>
    );
  };

  return renderLoading();
}
