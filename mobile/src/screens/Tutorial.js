import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  SafeAreaView,
  useWindowDimensions,
  Image,
} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {useTranslation} from 'react-i18next';
import {isFirstOpen, setFirstOpen} from '../helpers/isFirstOpen';
import TutorialFirst from '../assets/tutorialFirst.png';
import TutorialSecond from '../assets/tutorialSecond.png';
import TutorialThird from '../assets/tutorialThird.png';
import TutorialFourth from '../assets/tutorialFourth.png';

const arr = [TutorialFirst, TutorialSecond, TutorialThird, TutorialFourth];

const Tutorial = (props) => {
  let [activeIndex, setActiveIndex] = useState(0);
  const [
    carouselItems = [
      TutorialFirst,
      TutorialSecond,
      TutorialThird,
      TutorialFourth,
    ],
  ] = useState();

  console.log(props);

  const {t} = useTranslation();

  const windowWidth = useWindowDimensions().width;
  const dotsWidth = 0.5 * windowWidth;
  const buttonsWidth = 0.225 * windowWidth;
  const lateralPadding = 0.025 * windowWidth;
  const dotsPadding = 0.15 * windowWidth;

  const onDone = async () => {
    if (await isFirstOpen()) {
      setFirstOpen();
      props.navigation.navigate('CategoryChooser');
    } else {
      props.navigation.pop();
    }
  };

  const renderSkip = () => {
    return (
      <TouchableOpacity
        onPress={onDone}
        style={{paddingLeft: 12, paddingTop: 12}}>
        <Text style={{color: 'black', fontSize: 18}}>Skip</Text>
      </TouchableOpacity>
    );
  };

  const renderDone = () => {
    return (
      <TouchableOpacity
        onPress={onDone}
        style={{
          marginLeft: 'auto',
          paddingRight: 12,
          paddingTop: 12,
          zIndex: 100,
        }}>
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
            }}></View>
        </ImageBackground>
        <Text style={{fontSize: 30}}>{item.title}</Text>
        <Text>{item.text}</Text>
      </View>
    );
  };

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

  return (
    <SafeAreaView>
      <Carousel
        layout={'default'}
        ref={(ref) => (carousel = ref)}
        data={carouselItems}
        sliderWidth={windowWidth}
        itemWidth={windowWidth}
        renderItem={renderItem}
        onSnapToItem={(index) =>
          setActiveIndex((activeIndex = index))
        }></Carousel>
      <View
        style={{
          position: 'absolute',
          marginTop: -5,
          height: 50,
          flexDirection: 'row',
          width: windowWidth,
        }}>
        <View
          style={{
            width: buttonsWidth,
            marginLeft: lateralPadding,
          }}>
          {renderSkip()}
        </View>
        <View
          style={{
            width: dotsWidth,
            paddingHorizontal: dotsPadding,
          }}>
          {pagination()}
        </View>
        <View
          style={{
            width: buttonsWidth,
            marginRight: lateralPadding,
            marginTop: 5,
          }}>
          {renderDone()}
        </View>
      </View>
    </SafeAreaView>
  );
};
export default Tutorial;

const styles = StyleSheet.create({
  dotsContainer: {
    position: 'absolute',
    marginTop: -10,
    borderColor: 'blue',
    borderWidth: 3,
    flexDirection: 'row',

    marginLeft: 50,
    //left: '50%',
    //right: '50%',
  },
  image: {
    alignSelf: 'center',
    resizeMode: 'cover',
    width: '100%',
    height: '100%',
  },
});
