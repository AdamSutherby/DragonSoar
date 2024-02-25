import React from 'react';
import { View, StyleSheet } from 'react-native';
import MainMenu from './MainMenu';

function Game() {
    return (
      <View style={styles.container}>
        <View style={styles.sky}></View>
        <View style={styles.grass}></View>
        <View style={styles.menuOverlay}>
          <MainMenu />
        </View>
      </View>
    );
  };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  sky: {
    flex: 7,
    backgroundColor: 'lightblue',
  },
  grass: {
    flex: 3,
    backgroundColor: 'green',
  },
  menuOverlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Game;
