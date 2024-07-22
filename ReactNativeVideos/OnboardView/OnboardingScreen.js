import React from 'react';
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';
import Carousel from 'react-native-snap-carousel';

const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

const onboardingData = [
  {
    title: 'Hoş Geldiniz!',
    text: 'Uygulamanın harika özelliklerini keşfedin.',
    image: require('./assets/slide1.png'),
  },
  {
    title: 'Kolay Kullanım',
    text: 'Kullanımı kolay arayüz ve güçlü özellikler.',
    image: require('./assets/slide2.png'),
  },
  {
    title: 'Anında Bildirimler',
    text: 'Size anında bildirimler ve güncellemeler gönderir.',
    image: require('./assets/slide3.png'),
  },
];

const OnboardingScreen = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <View style={styles.slide}>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.text}>{item.text}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Carousel
        data={onboardingData}
        renderItem={renderItem}
        sliderWidth={viewportWidth}
        itemWidth={viewportWidth}
        loop={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f7f7f7',
    borderRadius: 10,
    padding: 20,
  },
  image: {
    width: viewportWidth * 0.8,
    height: viewportHeight * 0.4,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
  },
});

export default OnboardingScreen;
