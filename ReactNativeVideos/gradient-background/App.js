import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {

  const COLORS = [
    {
      id: 1,
      name: "flare",
      colors: ["#f12711", "#f5af19"]
    },
    {
      id: 2,
      name: "Rainbow Blue",
      colors: ["#00F260", "#0575E6"]
    }
  ];

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView} showsVerticalScrollIndicator={false}>
        {COLORS.map((item) => (
          <LinearGradient
            key={item.id}
            colors={item.colors}
            start={[0, 0.5]}
            end={[1, 0.5]}
            style={styles.gradient}
          >
            <Text style={styles.text}>{item.name}</Text>
          </LinearGradient>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  scrollView: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  gradient: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 120,
    width: '100%',
    borderRadius: 10,
    marginBottom: 8,
  },
  text: {
    fontSize: 20,
    fontWeight: '800',
    color: '#FFF',
  },
});
