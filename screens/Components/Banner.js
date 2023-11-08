import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Animated,
  useWindowDimensions,
  TouchableOpacity,
} from "react-native";
import React, { useState, useRef } from "react";
import Paginator from "../Onboarding/Paginator";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const images = [
  "https://d3d9lsu8c2flig.cloudfront.net/si-upload/2023-09-29/promo-banner-139020852700-1695953936.jpg",
  "https://d3d9lsu8c2flig.cloudfront.net/si-upload/2023-09-29/promo-banner-137045384200-1695953320.jpg",
];

import BannerModel from '../../model/BannerModel'

const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;

const Banner = ({ navigation }) => {
  const { width } = useWindowDimensions();
  const scrollX = useRef(new Animated.Value(0)).current;

  const [imgActive, setImgActive] = useState(0);

  onchange = (nativeEvent) => {
    if (nativeEvent) {
      const slide = Math.ceil(
        nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width
      );

      if (slide != imgActive) {
        setImgActive(slide);
      }
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          {
            useNativeDriver: false,
          }
        )}
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        horizontal={true}
        style={styles.wrap}
      >
        {BannerModel.map((data, index) => (
          <TouchableOpacity key={index} onPress={() =>
            navigation.navigate('Register')
          }>
            <Image
            key={index}
            resizeMode='contain'
            style={styles.wrap}
            source={data.image}
          />
          </TouchableOpacity>
        ))}
      </ScrollView>
      {/* <View style={styles.wrapDot}>
        <View style={{ flexDirection: "row", height: 70 }}>
          {images.map((_, index) => {
            const inputRange = [
              (index - 1) * width,
              index * width,
              (index + 1) * width,
            ];

            const dotWidth = scrollX.interpolate({
              inputRange,
              outputRange: [10, 20, 10],
              extrapolate: "clamp",
            });

            const opacity = scrollX.interpolate({
              inputRange,
              outputRange: [0.3, 1, 0.3],
              extrapolate: "clamp",
            });

            return (
              <Animated.View
                style={[styles.dotPaginator, { width: dotWidth, opacity }]}
                key={index.toString()}
              />
            );
          })}
        </View>
      </View> */}
    </View>
  );
};

export default Banner;

const styles = StyleSheet.create({
  container: {
    width: WIDTH,
    // height: HEIGHT * 0.25,
    overflow: 'hidden',
    alignSelf: 'stretch',
  },
  wrap: {
    width: WIDTH,
    height: HEIGHT * 0.20,

  },
  wrapDot: {
    position: "absolute",
    bottom: 0,
    flexDirection: "row",
    alignSelf: "center",
  },
  dotActive: {
    margin: 3,
    color: "#000",
  },
  dot: {
    margin: 3,
    color: "#888",
  },
  dotPaginator: {
    height: 8,
    borderRadius: 5,
    backgroundColor: "#1E88E5",
    marginHorizontal: 8,
  },
});
