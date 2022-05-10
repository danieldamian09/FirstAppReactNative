import React from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';

interface Props {
  title: string;
}

const Fab = ({title}: Props) => {
  return (
    <TouchableOpacity
      style={styles.fabLocationBR}
      onPress={() => console.log('Click')}>
      <View style={styles.fab}>
        <Text style={styles.fabText}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  fabLocationBR: {
    position: 'absolute',
    bottom: 25,
    right: 25,
  },
  fab: {
    backgroundColor: '#5856D6',
    borderRadius: 100,
    width: 60,
    height: 60,
    justifyContent: 'center',
  },
  fabText: {
    color: '#fff',
    fontSize: 25,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
});

export default Fab;
