import React from 'react';
import { View } from 'react-native';
import { HopInterface, ibuConditions, RemoveHop } from '../types';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { IbuCalculatorService } from '../services/IbuCalculatorService';

import { LeftBox, Circle } from './StyledComponents/';

import RemoveHopButton from '../assets/SubtractButton.svg';
import { StyledText, TouchableButton } from './StyledComponents';

type Param = {
  hop: HopInterface;
  removeHop: RemoveHop;
  idx: number;
  conditions: ibuConditions;
  addHopMode: boolean;
};

export const Hop: React.FC<Param> = ({
  hop,
  removeHop,
  idx,
  conditions,
  addHopMode
}): JSX.Element => {
  const ibuCalculator = IbuCalculatorService(conditions, hop);

  return (
    <LeftBox>
      <View style={{ width: 64, height: 64 }}>
        <Circle background="#EF4E44">
          <StyledText>{hop.weight} g</StyledText>
        </Circle>
      </View>
      <View style={{ width: 64, height: 64 }}>
        <Circle background="#EF6D44">
          <StyledText>{hop.alphaAcid} %</StyledText>
        </Circle>
      </View>
      <View style={{ width: 64, height: 64 }}>
        <Circle background="#EF8C44">
          <StyledText>{hop.boilTime} min</StyledText>
        </Circle>
      </View>
      <View style={{ width: 74, height: 74 }}>
        <Circle background="#99EF44" diameter={72}>
          <StyledText>{ibuCalculator}</StyledText>
        </Circle>
      </View>
      <TouchableButton hidden={addHopMode} onPress={() => removeHop(hop)}>
        <RemoveHopButton width="32px" />
      </TouchableButton>
    </LeftBox>
  );
};
