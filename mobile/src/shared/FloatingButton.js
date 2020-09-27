import React, {Component, useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
  Animated,
} from 'react-native';
import burger from '../assets/burger.png';
import more from '../assets/more.png';
import history from '../assets/history.png';
import scan from '../assets/scan.png';
import plus from '../assets/plus.png';

const FloatingButton = (props) => {
  let open = false;
  const animation = new Animated.Value(0);

  const toggleMenu = () => {
    const toValue = open ? 0 : 1;
    Animated.spring(animation, {
      toValue,
      friction: 6,
    }).start();
    open = !open;
  };

  const moreStyle = {
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
  };

  const feedbackStyle = {
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
  };

  const historyStyle = {
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
  };

  const scanStyle = {
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

  // TO DO:
  //  {renderPopButton([styles.button, styles.submenu, scanStyle]), scan}

  return (
    <View style={[styles.container, props.style]}>
      <TouchableWithoutFeedback>
        <Animated.View style={[styles.button, styles.submenu, scanStyle]}>
          <Image source={scan} style={styles.subImg} />
        </Animated.View>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback>
        <Animated.View style={[styles.button, styles.submenu, historyStyle]}>
          <Image source={history} style={styles.subImg} />
        </Animated.View>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback>
        <Animated.View style={[styles.button, styles.submenu, feedbackStyle]}>
          <Image source={plus} style={styles.subImg} />
        </Animated.View>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback onPress={onMorePressed}>
        <Animated.View style={[styles.button, styles.submenu, moreStyle]}>
          <Image source={more} style={styles.subImg} />
        </Animated.View>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback onPress={toggleMenu}>
        <Animated.View style={[styles.button, styles.menu, rotation]}>
          <Image source={burger} style={styles.img} />
        </Animated.View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default FloatingButton;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    position: 'absolute',
    bottom: 110,
    right: 60,
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
    shadowOffset: {
      height: 10,
    },
  },
  menu: {
    backgroundColor: '#00D9C3',
  },
  submenu: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    backgroundColor: '#FFF',
  },
});
