import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  useWindowDimensions,
} from 'react-native';

// cuando se traen los valores de Dimensions no cambian los valores asi se gire el telefono
// const {width, height} = Dimensions.get('window');

const DimensionesScreen = () => {
  const {width, height} = useWindowDimensions();

  return (
    <View>
      <View style={styles.container}>
        <View style={{
           ...styles.cajaMorada, width: width * 0.2,
        }} />
        <View style={styles.cajaNaranja} />
      </View>
      <View>
        <Text style={styles.title}>
          Width: {width} Height: {height}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 300,
    width: '100%',
    backgroundColor: 'red',
  },
  cajaMorada: {
    backgroundColor: 'purple',
    height: '50%',
    // width: '20%',
  },
  cajaNaranja: {
    backgroundColor: 'orange',
    // height: '50%',
    // width: '50%',
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
  },
});

export default DimensionesScreen;
