import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
  Animated,
} from 'react-native';
import burgerImg from '../assets/burger.png';
import moreImg from '../assets/more.png';
import historyImg from '../assets/history.png';
import scanImg from '../assets/scan.png';
import plusImg from '../assets/plus.png';

const animation = new Animated.Value(0);

const FloatingButton = (props) => {
  let open = false;

  const toggleMenu = () => {
    const toValue = open ? 0 : 1;
    Animated.spring(animation, {
      toValue,
      friction: 6,
    }).start();
    open = !open;
  };

  const rotation = {
    transform: [
      {
        rotate: animation.interpolate({
          inputRange: [0, 1],
          outputRange: ['0deg', '45deg'],
        }),
      },
    ],
  };

  const onMorePressed = () => {
    props.navigation.navigate('More');
  };

  const renderPopButton = (style, img, func) => {
    return (
      <TouchableWithoutFeedback onPress={func}>
        <Animated.View style={style}>
          <Image source={img} style={styles.subImg} />
        </Animated.View>
      </TouchableWithoutFeedback>
    );
  };

  // TO DO:
  //  {renderPopButton([styles.button, styles.submenu, scanStyle]), scan}

  return (
    <View style={[styles.container, props.style]}>
      {renderPopButton(
        [styles.button, styles.submenu, styles.scanStyle],
        scanImg,
        () => {
          console.log('scan');
        },
      )}

      {renderPopButton(
        [styles.button, styles.submenu, styles.historyStyle],
        historyImg,
        () => {
          console.log('history');
        },
      )}

      {renderPopButton(
        [styles.button, styles.submenu, styles.feedbackStyle],
        plusImg,
        () => {
          console.log('feedback');
        },
      )}

      {renderPopButton(
        [styles.button, styles.submenu, styles.moreStyle],
        moreImg,
        onMorePressed,
      )}

      <TouchableWithoutFeedback onPress={toggleMenu}>
        <Animated.View style={[styles.button, rotation]}>
          <Image source={burgerImg} style={styles.img} />
        </Animated.View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default FloatingButton;

const styles = StyleSheet.create({
  container: {
    // alignItems: 'center',
    position: 'absolute',
    top: 190,
    left: 100,
  },
  img: {
    width: 30,
    height: 30,
    backgroundColor: '#00D9C3',
    // borderRadius: 40/2
  },
  subImg: {
    width: 30,
    height: 30,
    backgroundColor: '#FFF',
    borderRadius: 60 / 2,
  },
  button: {
    position: 'absolute',
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    justifyContent: 'center',
    alignItems: 'center',
    shadowRadius: 10,
    shadowColor: '#00213B',
    shadowOpacity: 0.3,
    backgroundColor: '#00D9C3',
    shadowOffset: {
      height: 10,
    },
  },
  submenu: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    backgroundColor: '#FFF',
  },
  moreStyle: {
    transform: [
      {
        scale: animation,
      },
      {
        translateY: animation.interpolate({
          inputRange: [0, 1],
          outputRange: [0, -60],
        }),
      },
    ],
  },
  feedbackStyle: {
    transform: [
      {
        scale: animation,
      },
      {
        translateY: animation.interpolate({
          inputRange: [0, 1],
          outputRange: [0, -120],
        }),
      },
    ],
  },
  historyStyle: {
    transform: [
      {
        scale: animation,
      },
      {
        translateY: animation.interpolate({
          inputRange: [0, 1],
          outputRange: [0, -180],
        }),
      },
    ],
  },
  scanStyle: {
    transform: [
      {
        scale: animation,
      },
      {
        translateY: animation.interpolate({
          inputRange: [0, 1],
          outputRange: [0, -240],
        }),
      },
    ],
  },
});
