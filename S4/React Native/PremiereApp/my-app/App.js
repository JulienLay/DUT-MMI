import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Animated, Dimensions } from 'react-native';
import Svg, { Circle } from 'react-native-svg';
import { DeviceMotion } from 'expo-sensors';

// récupérer la taille de l'écran
const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

export default class App extends React.Component {
  // position de la balle
  state = {
    pos: {
      x: 0,
      y: 0,
    },
  }

  // à la création du composant, lancer le détecteur de mouvement
  componentWillMount() {
    DeviceMotion.addListener(
      (datas) => {
        console.log(datas)
        const deltaX = Math.round(datas.rotation.gamma * 100)
        const deltaY = Math.round(datas.rotation.beta * 100)

        const newx = (this.state.pos.x + deltaX) < deviceWidth / 2 && (this.state.pos.x + deltaX) > -deviceWidth / 2
          ? this.state.pos.x + deltaX
          : this.state.pos.x
        const newy = (this.state.pos.y + deltaY) < deviceHeight / 2 - 70 && (this.state.pos.y + deltaY) > -deviceHeight +800 / 2
          ? this.state.pos.y + deltaY
          : this.state.pos.y

        this.setState({ pos: { x: newx, y: newy } })
      }
    )
  }

  dedans() {
    return this.state.pos.x < 50
      && this.state.pos.x > -50
      && this.state.pos.y < -50
      && this.state.pos.y > -150
  }

  render() {
    return (
      <View style={styles.container}>
        <Svg height={140} width={140}>
          <Circle
            cx={65}
            cy={65}
            r={60}
            strokeWidth={2.5}
            stroke="black"
            fill="black"
          >
          </Circle>
        </Svg>

        <Animated.View
          style={{
            transform: [{ translateX: this.state.pos.x }, { translateY: this.state.pos.y }],
          }}>
          <Svg height={100} width={100} >
            <Circle cx="50" cy="50" r="45" strokeWidth="2.5" stroke={ this.dedans() ? "red" : "yellow" } fill={ this.dedans() ? "black" : "yellow" } />
          </Svg>
        </Animated.View>

        <StatusBar style="auto" />
      </View>
    )
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
