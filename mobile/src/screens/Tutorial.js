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
import Carousel from 'react-native-snap-carousel';
import {useTranslation} from 'react-i18next';
import TutorialFirst from '../assets/tutorialFirst.png';
import TutorialSecond from '../assets/tutorialSecond.png';
import TutorialThird from '../assets/tutorialThird.png';
import TutorialFourth from '../assets/tutorialFourth.png';

const arr = [TutorialFirst, TutorialSecond, TutorialThird, TutorialFourth];

const Tutorial = (props) => {
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

  const renderItem = ({item, index}) => {
    return (
      <View>
        <Image source={arr[index]} style={{width: '100%', height: '100%'}} />
        <Text style={{fontSize: 30}}>{item.title}</Text>
        <Text>{item.text}</Text>
      </View>
    );
  };
  {
    console.log(activeIndex);
  }
  return (
    <SafeAreaView style={{flex: 1, paddingTop: 50}}>
      <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center'}}>
        <Carousel
          layout={'default'}
          ref={(ref) => (carousel = ref)}
          data={carouselItems}
          sliderWidth={300}
          itemWidth={300}
          renderItem={renderItem}
          dotsLength={4}
          dotColor={'red'}
          onSnapToItem={(index) => setActiveIndex({activeIndex: index})}
        />
      </View>
    </SafeAreaView>
  );
};

export default Tutorial;

const styles = StyleSheet.create({
  buttonsContainer: {
    flexDirection: 'row',
    marginLeft: 50,
    position: 'absolute',
    bottom: -30,
  },
  buttonNext: {
    elevation: 8,
    backgroundColor: '#009688',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginTop: 25,
    marginLeft: 10,
    marginRight: 10,
    width: 150,
  },
  buttonBack: {
    elevation: 8,
    backgroundColor: '#009688',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginTop: 25,
    width: 150,
  },

  image: {
    alignSelf: 'center',
    width: '100%',
    height: '100%',
    // flexWrap: 'wrap',
    // flexDirection: 'r ow',
  },
  appButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
  },
});

// renderSkip = () => {
//   return (
//     <TouchableOpacity onPress={props.onDone} style={styles.buttonBack}>
//       <Text style={styles.appButtonText}>SKIP</Text>
//     </TouchableOpacity>
//   );
// };

// renderDone = () => {
//   return (
//     <TouchableOpacity onPress={props.onDone} style={styles.buttonNext}>
//       <Text style={styles.appButtonText}>Done</Text>
//     </TouchableOpacity>
//   );
// };

// return <ImageBackground source={TutorialFirst} style={styles.image} />;
