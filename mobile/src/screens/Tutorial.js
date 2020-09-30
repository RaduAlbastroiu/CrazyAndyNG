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
  // const [entries] = useState();
  // const [activeSlide, setActiveSlide] = useState();
  const [activeIndex, setActiveIndex] = useState(0);
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
        style={styles.buttonBack}>
        <Text style={styles.appButtonText}>SKIP</Text>
      </TouchableOpacity>
    );
  };

  const renderDone = () => {
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}
        style={styles.buttonNext}>
        <Text style={styles.appButtonText}>Done</Text>
      </TouchableOpacity>
    );
  };

  const renderItem = ({item, index}) => {
    return (
      <View>
        <Image source={arr[index]} style={styles.image} />
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
        dotsLength={4}
        activeDotIndex={activeIndex}
        dotStyle={{
          position: 'absolute',
          backgroundColor: 'rgba(255, 255, 255, 0.92)',
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

  return (
    <SafeAreaView>
      <Carousel
        layout={'default'}
        ref={(ref) => (carousel = ref)}
        data={carouselItems}
        sliderWidth={415}
        itemWidth={420}
        renderItem={renderItem}
        dotsLength={4}
        dotColor={'red'}
        onSnapToItem={(index) => setActiveIndex({activeIndex: index})}
        // onSnapToItem={(index) => setActiveSlide({activeSlide: index})}
      />
      {pagination()}
    </SafeAreaView>
  );
};

export default Tutorial;

const styles = StyleSheet.create({
  image: {
    alignSelf: 'center',
    resizeMode: 'cover',
    width: '100%',
    height: '100%',
  },
});
