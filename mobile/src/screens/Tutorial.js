import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  SafeAreaView,
  Image,
} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {useTranslation} from 'react-i18next';
import TutorialFirst from '../assets/tutorialFirst.png';
import TutorialSecond from '../assets/tutorialSecond.png';
import TutorialThird from '../assets/tutorialThird.png';
import TutorialFourth from '../assets/tutorialFourth.png';

const arr = [TutorialFirst, TutorialSecond, TutorialThird, TutorialFourth];

const Tutorial = ({navigation}) => {
  let [activeIndex, setActiveIndex] = useState(0);
  const [
    carouselItems = [
      TutorialFirst,
      TutorialSecond,
      TutorialThird,
      TutorialFourth,
    ],
  ] = useState();

  const {t} = useTranslation();

  const renderSkip = () => {
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}
        style={{paddingLeft: 12, paddingTop: 12}}>
        <Text style={{color: 'black', fontSize: 18}}>Skip</Text>
      </TouchableOpacity>
    );
  };

  const renderDone = () => {
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}
        style={{marginLeft: 'auto', paddingRight: 12, paddingTop: 12}}>
        <Text style={{color: 'black', fontSize: 18}}>Done</Text>
      </TouchableOpacity>
    );
  };

  const renderItem = ({item, index}) => {
    return (
      <View>
        <ImageBackground source={arr[index]} style={styles.image}>
          <View
            style={{
              flexDirection: 'row',
            }}>
            {renderSkip()}
            {renderDone()}
          </View>
        </ImageBackground>
        <Text style={{fontSize: 30}}>{item.title}</Text>
        <Text>{item.text}</Text>
      </View>
    );
  };
  {
    console.log(activeIndex);
  }

  const pagination = () => {
    return (
      <Pagination
        dotsLength={carouselItems.length}
        activeDotIndex={activeIndex}
        // containerStyle={{backgroundColor: 'rgba(0, 0, 0, 0.75)'}}
        dotStyle={{
          // position: 'absolute',
          width: 10,
          height: 10,
          borderRadius: 5,
          marginHorizontal: 8,
          backgroundColor: 'black',
        }}
        inactiveDotStyle={
          {
            // Define styles for inactive dots here
          }
        }
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
    );
  };
  console.log('this is activeIndex', activeIndex);

  return (
    <SafeAreaView>
      <Carousel
        layout={'default'}
        ref={(ref) => (carousel = ref)}
        data={carouselItems}
        sliderWidth={415}
        itemWidth={415}
        renderItem={renderItem}
        onSnapToItem={(index) =>
          setActiveIndex((activeIndex = index))
        }></Carousel>
      <View style={styles.dotsContainer}>{pagination()}</View>
    </SafeAreaView>
  );
};
export default Tutorial;

const styles = StyleSheet.create({
  dotsContainer: {
    position: 'absolute',
    width: '100%',
    marginTop: -10,
  },
  image: {
    alignSelf: 'center',
    resizeMode: 'cover',
    width: '100%',
    height: '100%',
  },
});
