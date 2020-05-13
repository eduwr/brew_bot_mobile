import React, { useState, useRef, useEffect } from 'react';
import { Animated, Easing, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { AddHop } from '../types';
import { IbuCalculatorService } from '../services';
import { ibuConditions } from '../types/index';
import { StyledInput, LeftBox, Circle, StyledText } from './StyledComponents/';

import AddHopButton from '../assets/PlusButton.svg';

interface Props {
  addHop: AddHop;
  toggleMode: () => void;
  conditions: ibuConditions;
}

export const AddHopForm: React.FC<Props> = ({
  addHop,
  toggleMode,
  conditions
}) => {
  const [weight, setWeight] = useState('');
  const [alphaAcid, setAlphaAcid] = useState('');
  const [boilTime, setBoilTime] = useState('');

  const showUpValue = useRef(new Animated.Value(0)).current;
  const animateText = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const duration = 1000;
    Animated.parallel([
      Animated.timing(showUpValue, {
        toValue: 1,
        duration,
        easing: Easing.elastic(1)
      }),
      Animated.timing(animateText, {
        toValue: 1,
        duration,
        delay: 900,
        easing: Easing.linear
      })
    ]).start();
  }, []);

  const showUp = showUpValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0%', '100%']
  });

  return (
    <Animated.View style={{ width: showUp, backgroundColor: '#5b6239' }}>
      <LeftBox>
        <Animated.View
          style={{
            width: 64,
            height: 64,
            opacity: animateText
          }}
        >
          <Circle background="#EF4E44">
            <StyledInput
              dark
              keyboardType="numeric"
              placeholder="Peso&#x0a;(g)"
              placeholderTextColor="rgba(0, 0, 0, 0.5)"
              value={`${weight}`}
              onChangeText={(text) => {
                setWeight(text);
              }}
            ></StyledInput>
          </Circle>
        </Animated.View>

        <Animated.View
          style={{
            width: 64,
            height: 64,
            opacity: animateText
          }}
        >
          <Circle background="#EF6D44">
            <StyledInput
              dark
              keyboardType="numeric"
              placeholder="A. Ácido&#x0a;(%)"
              placeholderTextColor="rgba(0, 0, 0, 0.5)"
              value={`${alphaAcid}`}
              onChangeText={(text) => {
                setAlphaAcid(text);
              }}
            ></StyledInput>
          </Circle>
        </Animated.View>
        <Animated.View
          style={{
            width: 64,
            height: 64,
            opacity: animateText
          }}
        >
          <Circle background="#EF8C44">
            <StyledInput
              dark
              keyboardType="numeric"
              placeholder="Tempo&#x0a;(min)"
              placeholderTextColor="rgba(0, 0, 0, 0.5)"
              value={`${boilTime}`}
              onChangeText={(text) => {
                setBoilTime(text);
              }}
            ></StyledInput>
          </Circle>
        </Animated.View>
        <Animated.View
          style={{
            width: 72,
            height: 72,
            opacity: animateText
          }}
        >
          <Circle background="#99EF44">
            <StyledText size="small" color="dark">
              IBU:
            </StyledText>
            <StyledText color="dark">
              {IbuCalculatorService(conditions, {
                weight,
                alphaAcid,
                boilTime
              })}
            </StyledText>
          </Circle>
        </Animated.View>

        <Animated.View style={{ opacity: animateText }}>
          <TouchableOpacity
            onPress={(e) => {
              addHop({ weight, alphaAcid, boilTime });
              setWeight('');
              setAlphaAcid('');
              setBoilTime('');
              toggleMode();
            }}
          >
            <AddHopButton width="32px" fill={'#fff'} />
          </TouchableOpacity>
        </Animated.View>
      </LeftBox>
    </Animated.View>
  );
};
