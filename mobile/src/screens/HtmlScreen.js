import React from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import useHelp from '../hooks/useHelp';

export default function HtmlScreen({navigation}) {
  const params = navigation.state.params;
  const {isLoading, data} = useHelp(params.screen);

  const renderLoading = () => {
    if (isLoading) {
      return <ActivityIndicator size="large" color="#0000ff" />;
    }
    return <Text>{data.page}</Text>;
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      {renderLoading()}
    </View>
  );
}
