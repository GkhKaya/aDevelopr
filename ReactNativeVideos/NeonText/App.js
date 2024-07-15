import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const NeonText = ({ text }) => {
  return (
    <Text style={styles.neonText}>{text}</Text>
  );
};

export default function App() {
  return (
    <View style={styles.appContainer}>
      <NeonText text="aDevelopr" />
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  neonText: {
    fontSize: 50,
    fontWeight: 'bold',
    color: '#0ff',
    textShadowColor: '#0ff',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius:20,
  },
});
