import {Image, StyleSheet, Text, TouchableOpacity } from "react-native";
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from "react-native-reanimated";




export default function BounceButton({image, text, styleImage, styleText, onPressed, styleButton, children, sttyle}) {
    
    const scale = useSharedValue(1);
    const animatedStyle = useAnimatedStyle(() => {
      return {
        transform: [{ scale: scale.value }],
      };
    });
  
    const handlePressIn = () => {
      scale.value = withSpring(0.95, {});
    };
  
    const handlePressOut = () => {
      scale.value = withSpring(1, {});
    };
  
    return (
      <TouchableOpacity
        onPress={onPressed}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        style = {sttyle}
      >
        <Animated.View style={[styleButton,animatedStyle]}>
          {children}
          <Image source={image} style={styleImage}/>
          <Text style={styleText}>{text}</Text>
        </Animated.View>
      </TouchableOpacity>
    );
};

