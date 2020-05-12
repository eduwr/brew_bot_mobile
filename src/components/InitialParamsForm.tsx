import React, { useEffect } from 'react';
import { Animated, Easing } from 'react-native';
import { StyledText, StyledView, StyledInput, Box } from './StyledComponents';

interface Param {
  endVolume: string;
  originalGravity: string;
  setEndVolume: React.Dispatch<React.SetStateAction<string>>;
  setOriginalGravity: React.Dispatch<React.SetStateAction<string>>;
}

export const InitialParamsForm: React.FC<Param> = ({
  endVolume,
  setEndVolume,
  originalGravity,
  setOriginalGravity
}): JSX.Element => {
  const animationValue = new Animated.Value(0);
  const opacityValue = new Animated.Value(0);
  useEffect(() => {
    animationValue.setValue(0);
    opacityValue.setValue(0);
    Animated.parallel([
      Animated.timing(animationValue, {
        toValue: 1,
        duration: 1000,
        easing: Easing.elastic(1)
      }),
      Animated.timing(opacityValue, {
        toValue: 1,
        duration: 1000,
        delay: 900,
        easing: Easing.linear
      })
    ]).start();
  }, []);

  const smallerWidthSize = animationValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0%', '64%']
  });
  const biggerWidthSize = animationValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0%', '88%']
  });

  return (
    <StyledView align="flex-end" marginBottom={15}>
      <Animated.View
        style={{ width: smallerWidthSize, flexDirection: 'row-reverse' }}
      >
        <Box justify="space-around">
          <Animated.View
            style={{ opacity: opacityValue, flexDirection: 'row-reverse' }}
          >
            <StyledInput
              value={endVolume}
              onChangeText={(text) => setEndVolume(text)}
              keyboardType="numeric"
              placeholder="25 (L)"
              placeholderTextColor="rgba(255, 255, 255, 0.6)"
            ></StyledInput>
            <StyledText>Volume Final:</StyledText>
          </Animated.View>
        </Box>
      </Animated.View>
      <Animated.View style={{ width: biggerWidthSize }}>
        <Box justify="space-around">
          <Animated.View
            style={{ opacity: opacityValue, flexDirection: 'row-reverse' }}
          >
            <StyledInput
              value={originalGravity}
              onChangeText={(text) => setOriginalGravity(text)}
              keyboardType="numeric"
              placeholder="1.05 g/mL"
              placeholderTextColor="rgba(255, 255, 255, 0.6)"
            ></StyledInput>
            <StyledText>Densidade Inicial (OG):</StyledText>
          </Animated.View>
        </Box>
      </Animated.View>
    </StyledView>
  );
};
