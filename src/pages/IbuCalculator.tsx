import React, { useState, useEffect } from 'react';
import { HomeScreenNavigationProp } from '../types';
import { Animated, StyleSheet, Easing } from 'react-native';

import {
  HopList,
  AddHopForm,
  Header,
  ScrollContainer,
  Box,
  StyledText,
  StyledView,
  TextInputWrapper,
  InitialParamsForm
} from '../components';

import { AddHop, RemoveHop, HopInterface } from '../types';
import { IbuCalculatorService } from '../services/IbuCalculatorService';
import HeaderImage from '../assets/HeaderImage.svg';

type Props = {
  navigation: HomeScreenNavigationProp;
};

const Hops: HopInterface[] = [];

export const IbuCalculator: React.FC<Props> = ({ navigation }) => {
  const [hops, setHops] = useState(Hops);
  const [addHopMode, setAddHopMode] = useState(true);
  const [endVolume, setEndVolume] = useState('');
  const [originalGravity, setOriginalGravity] = useState('');

  const addHop: AddHop = (newHop: HopInterface) => {
    setHops([...hops, newHop]);
  };

  const removeHop: RemoveHop = (currentHop) => {
    const newHopList = hops.filter((hop) => hop !== currentHop);
    setHops(newHopList);
  };

  const toggleMode = (): void => {
    setAddHopMode(!addHopMode);
  };

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

  const renderAddHopForm = (): JSX.Element | void => {
    if (addHopMode) {
      return (
        <AddHopForm
          conditions={{ endVolume, originalGravity }}
          addHop={addHop}
          toggleMode={toggleMode}
        ></AddHopForm>
      );
    }
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
    <ScrollContainer>
      <Header>
        <HeaderImage style={styles.svg}></HeaderImage>
      </Header>

      <StyledView align="flex-end" marginBottom={15}>
        <InitialParamsForm
          endVolume={endVolume}
          setEndVolume={setEndVolume}
          originalGravity={originalGravity}
          setOriginalGravity={setOriginalGravity}
        />
      </StyledView>
      <StyledView align="flex-start" background="#5b6239">
        <HopList
          removeHop={removeHop}
          hops={hops}
          toggleMode={toggleMode}
          addHopMode={addHopMode}
          conditions={{ endVolume, originalGravity }}
        ></HopList>
        {renderAddHopForm()}
      </StyledView>
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
    </ScrollContainer>
  );
};

const styles = StyleSheet.create({
  svg: {
    flex: 1
  }
});
