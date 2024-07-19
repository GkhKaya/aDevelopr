import React, { useState, useEffect, useRef } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, Dimensions, TextInput, Modal, Pressable } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import Animated, { FadeInDown, FadeInRight, FadeOutRight, Layout } from 'react-native-reanimated';
import LottieView from 'lottie-react-native';



export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: '#FFF' }}>
       <Animated.View entering={FadeInDown.delay(300).duration(300)}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 20 }}>
                    <View style={{ flexDirection: 'row' }}>
                        <AntDesign name="arrowleft" size={24} color="#ababab" />
                        <Text style={{ fontFamily: 'Poppins-Medium', color: '#1d1d1d', fontSize: 18, marginLeft: 20, marginTop: -2 }}>Shoes</Text>
                    </View>

                    <View style={{ flexDirection: 'row' }}>
                        <AntDesign name="search1" size={24} color="#ababab" />
                        <AntDesign name="shoppingcart" size={24} color="#ababab" style={{ marginLeft: 20 }} />
                    </View>
                </View>
            </Animated.View>

            <Animated.View entering={FadeInDown.delay(600).duration(300)}>
                <View style={{ width: width, height: 200 }}>
                    <Image source={require('./assets/adeveloper_logo.png')} style={{ width: width, height: 200 }} />
                    <View style={{ width: width, height: 200, position: 'absolute', backgroundColor: 'rgba(0,0,0,0.7)', justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontFamily: 'Poppins-Regular', color: '#FFF', fontSize: 30, }}>Curated for You</Text>
                    </View>
                </View>
            </Animated.View>
      </View>
  );
}