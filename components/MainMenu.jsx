import react from 'react';
import {
     StyleSheet,
    View,
    Text,
    TouchableOpacity
 } from 'react-native';

 function MainMenu() {
    return (
      <View style={[styles.menu, styles.background]}>
        <Text style={styles.title}>DRAGONSOAR</Text>
        <TouchableOpacity style={styles.button} onPress={() => {}}>
        <Text style={styles.buttonText}>Start</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => {}}>
        <Text style={styles.buttonText}>Options</Text>
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
    title: {
      fontSize: 50,
      color: 'black',
      marginBottom: 20,
    },
    button: {
        margin: 10,
        backgroundColor: 'transparent',
    }
  });
  
  export default MainMenu;