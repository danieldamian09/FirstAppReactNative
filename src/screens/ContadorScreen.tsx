/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {Text, View, Button} from 'react-native';

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

      <Button
        title="Aumentar"
        onPress={() => setContador(contador + 1)}
      />
    </View>
  );
};

export default ContadorScreen;
