import React, { useEffect, useRef } from 'react';
import { Animated } from 'react-native';

export default AnimatedMessageExample=() => {
  const translation = useRef(new Animated.Value(0)).current;
  
  console.log(translation)
  
  useEffect(() => {
    Animated.timing(translation, {
      toValue: 10,
      delay: 1000,
      useNativeDriver: true,
    }).start();
  }, []);
  
  return (
    <Animated.View
      style={{
        width: "90%",
        height: 60,
        borderRadius:10,
        alignSelf:'center',
        backgroundColor: 'orange',
        transform: [{ translateY: translation }],
      }}
    />
  );
};