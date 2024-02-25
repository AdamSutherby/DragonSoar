import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image
} from 'react-native';

function MainMenu() {
  return (
    <View style={[styles.menu, styles.background]}>
      <View style={styles.header}>
        <Image
          source={require('../assets/dragon.png')}
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.title}>DRAGONSOAR</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={() => {}}>
        <Text style={styles.buttonText}>START</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => {}}>
        <Text style={[styles.buttonText, styles.buttonTextPadding]}>OPTIONS</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  menu: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  background: {
    backgroundColor: 'transparent',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  title: {
    fontSize: 50,
    color: 'black',
  },
  button: {
    margin: 10,
    backgroundColor: 'transparent',
  },
  buttonText: {
    color: 'black',
    fontSize: 20,
  },
  buttonTextPadding: {
    paddingBottom: 20,
  },
});

export default MainMenu;
