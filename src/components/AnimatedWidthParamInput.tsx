import React, { useEffect } from 'react';
import { Animated, Easing } from 'react-native';
import { StyledText, StyledInput, Box } from './StyledComponents';

interface Param {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  placeholder?: string;
  finalWidth: number;
  title: string;
}

export const AnimatedWidthParamInput: React.FC<Param> = ({
  value,
  setValue,
  placeholder,
  finalWidth,
  title
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
    outputRange: ['0%', `${finalWidth}%`]
  });

  return (
    <Animated.View
      style={{ width: smallerWidthSize, flexDirection: 'row-reverse' }}
    >
      <Box justify="space-around">
        <Animated.View
          style={{ opacity: opacityValue, flexDirection: 'row-reverse' }}
        >
          <StyledInput
            value={value}
            onChangeText={(text) => setValue(text)}
            keyboardType="numeric"
            placeholder={placeholder ? placeholder : ''}
            placeholderTextColor="rgba(255, 255, 255, 0.6)"
          ></StyledInput>
          <StyledText>{title}:</StyledText>
        </Animated.View>
      </Box>
    </Animated.View>
  );
};
