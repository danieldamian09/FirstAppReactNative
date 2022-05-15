import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const PositionScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.cajaMorada} />
      <View style={styles.cajaNaranja} />
      <View />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#28C4D9',
  },
  cajaMorada: {
    backgroundColor: '#5856D6',
    width: 100,
    height: 100,
    borderWidth: 10,
    borderColor: '#fff',
    // por defecto todos tiene position relative
    // top: 100,
    // left: 100,
  },
  cajaNaranja: {
    backgroundColor: '#FF9F1C',
    width: 100,
    height: 100,
    borderWidth: 10,
    borderColor: '#fff',
    top: -50,
  },
});

export default PositionScreen;
