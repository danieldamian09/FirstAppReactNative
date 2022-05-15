import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const BoxObjectModelScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Box Object Model</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
  },
  title: {
    fontSize: 20,
    paddingHorizontal: 100,
    paddingVertical: 50,
    marginHorizontal: 50,
    // marginRight: 10,
    // marginLeft: 10,
    // padding: 20,
    // width: 250,
    borderWidth: 10,
    // backgroundColor: 'red',
  },
});

export default BoxObjectModelScreen;
