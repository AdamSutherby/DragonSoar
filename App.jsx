import react, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import Orientation from 'react-native-orientation-locker';
import Game from './components/Game';

function App() {
  useEffect(() => {
    Orientation.lockToLandscape();
    return () => {
      Orientation.unlockAllOrientations();
    };
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Game />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;