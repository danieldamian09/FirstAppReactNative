/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

const ContadorScreen = () => {
  const [contador, setContador] = useState(10);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
      }}>
      <Text
        style={{
          textAlign: 'center',
          fontSize: 40,
          top: -15,
        }}>
        Contador: {contador}
      </Text>

      <TouchableOpacity onPress={() => setContador(contador + 1)}>
        <View style={{
          backgroundColor: '#00ff00',
          borderRadius: 100,
        }}>
          <Text>Click me !!!!!</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ContadorScreen;
