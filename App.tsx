import React from 'react';
import {SafeAreaView} from 'react-native';
// import BoxObjectModelScreen from './src/screens/BoxObjectModelScreen';
import DimensionesScreen from './src/screens/DimensionesScreen';
// import ContadorScreen from './src/screens/ContadorScreen';
// import HolaMundoScreen from './src/screens/HolaMundoScreen';

const App = () => {
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <SafeAreaView style={{flex: 1}}>
       {/* <HolaMundoScreen /> */}
       {/* <ContadorScreen /> */}
      {/* <BoxObjectModelScreen /> */}
      <DimensionesScreen />
    </SafeAreaView>
  );
};

export default App;
