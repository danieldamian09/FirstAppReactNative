/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text} from 'react-native';

const HolaMundoScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        // backgroundColor: 'blue',
        justifyContent: 'center',
      }}>
      <Text
        style={{
          fontSize: 45,
          textAlign: 'center',
        }}>
        Hola Humberto
      </Text>
    </View>
  );
};

export default HolaMundoScreen;
