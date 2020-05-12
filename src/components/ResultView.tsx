import React, { useEffect } from 'react';
import {
  StyledView,
  Box,
  TextInputWrapper,
  StyledText
} from './StyledComponents';
import { Animated, Easing } from 'react-native';
import { HopInterface } from '../types/index';
import { IbuCalculatorService } from '../services';

interface Prop {
  hops: HopInterface[];
  endVolume: string;
  originalGravity: string;
}

export const ResultView: React.FC<Prop> = ({
  hops,
  endVolume,
  originalGravity
}): JSX.Element => {
  const ibuReducer = (arr: HopInterface[]): string => {
    if (arr.length === 0) {
      return '0';
    }

    const ibuArr = arr.map((element) => {
      return Number(
        IbuCalculatorService({ endVolume, originalGravity }, element)
      );
    });

    const totalIbu = ibuArr.reduce(
      (previous, current) => (previous += current)
    );

    return totalIbu.toFixed(2);
  };

  const animationValue = new Animated.Value(0);
  const textAnimationValue = new Animated.Value(0);

  useEffect(() => {
    animationValue.setValue(0);
    textAnimationValue.setValue(0);
    Animated.parallel([
      Animated.timing(animationValue, {
        toValue: 1,
        duration: 1000,
        easing: Easing.elastic(1)
      }),
      Animated.timing(textAnimationValue, {
        toValue: 1,
        duration: 1000,
        delay: 900,
        easing: Easing.linear
      })
    ]).start();
  }, []);

  const widthAnimation = animationValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0%', '80%']
  });

  return (
    <StyledView align="flex-end">
      <Animated.View
        style={{ flexDirection: 'row-reverse', width: widthAnimation }}
      >
        <Box
          style={{ flexDirection: 'row-reverse' }}
          height={80}
          justify="space-around"
        >
          <Animated.View
            style={{
              opacity: textAnimationValue,
              flexDirection: 'row-reverse',
              justifyContent: 'space-between'
            }}
          >
            <TextInputWrapper>
              <StyledText size="big" color="white">
                {ibuReducer(hops)}
              </StyledText>
            </TextInputWrapper>
            <StyledText size="big">IBU Total: </StyledText>
          </Animated.View>
        </Box>
      </Animated.View>
    </StyledView>
  );
};
