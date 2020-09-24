import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
  Animated,
} from 'react-native';
import burger from '../assets/burger.png';

export default class FloatingButton extends Component {
  animation=new Animated.Value(0);

toggleMenu =() => {
const toValue= this.open ? 0 :1

Animated.spring(this.animation,
  {
    toValue,
    friction:6,
  }).start();

this.open = !this.open;

}

  render() {


    const moreStyle= {
      transform: [
        {
          scale: this.animation
        },
        {
          translateY: this.animation.interpolate({
            inputRange:[0,1],
            outputRange: [0, -60]
          })
        }
      ]
    }

    const faqStyle= {
      transform: [
        {
          scale: this.animation
        },
        {
          translateY: this.animation.interpolate({
            inputRange:[0,1],
            outputRange: [0, -120]
          })
        }
      ]
    }

    const privacyStyle= {
      transform: [
        {
          scale: this.animation
        },
        {
          translateY: this.animation.interpolate({
            inputRange:[0,1],
            outputRange: [0, -180]
          })
        }
      ]
    }

    const termsStyle= {
      transform: [
        {
          scale: this.animation
        },
        {
          translateY: this.animation.interpolate({
            inputRange:[0,1],
            outputRange: [0, -240]
          })
        }
      ]
    }



const rotation = {
  transform: [
    {
      rotate:this.animation.interpolate({
        inputRange: [0,1],
        outputRange: ['0deg', '45deg']
      })
    }
  ]
}

    return (
      <View style={[styles.container, this.props.style]}>
        <TouchableWithoutFeedback>
          <Animated.View style={[styles.button, styles.submenu, termsStyle]}>
            <Image source={burger} style={styles.img} />
          </Animated.View>
        </TouchableWithoutFeedback>
        
          <TouchableWithoutFeedback>
          <Animated.View style={[styles.button, styles.submenu, privacyStyle]}>
            <Image source={burger} style={styles.img} />
          </Animated.View>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback>
          <Animated.View style={[styles.button, styles.submenu, faqStyle]}>
            <Image source={burger} style={styles.img} />
          </Animated.View>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback>
          <Animated.View style={[styles.button, styles.submenu, aboutStyle]}>
            <Image source={burger} style={styles.img} />
          </Animated.View>
        </TouchableWithoutFeedback>
        
        <TouchableWithoutFeedback onPress={this.toggleMenu}>
          <Animated.View style={[styles.button, styles.menu, rotation]}>
            <Image source={burger} style={styles.img} />
          </Animated.View>
        </TouchableWithoutFeedback>
      </View>
    );
    1;
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    position: 'absolute',
    bottom:80,
    right:60
  },
  img: {
    width: 50,
    height: 50,
    backgroundColor: '#FFF',
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
    backgroundColor: '#00213B'
  },
  submenu:{
    width: 48,
    height:48,
    borderRadius: 48/2,
    backgroundColor: '#00213B',
  }
});
