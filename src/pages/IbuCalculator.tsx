import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import {
  StyledButton,
  StyledView,
  StyledCard,
  Title,
  StyledInput,
  HopCard
} from '../components';
import { Props } from '../types';

export function IbuCalculator({ navigation }: Props) {
  const [endVolume, setEndVolume] = useState('');
  const [originalGravity, setOriginalGravity] = useState('');
  const [weight, setWeight] = useState('');
  const [alphaAcid, setAlphaAcid] = useState('');
  const [boilTime, setBoilTime] = useState('');
  const addHops = () => {
    console.log(endVolume, originalGravity, weight, alphaAcid, boilTime);
  };

  return (
    <StyledView>
      <StyledCard>
        <Text>Volume Final</Text>
        <StyledInput
          value={endVolume}
          onChangeText={(text) => setEndVolume(text)}
          keyboardType={'numeric'}
        ></StyledInput>
        <Text>Original Gravity(OG)</Text>
        <StyledInput
          value={originalGravity}
          onChangeText={(text) => setOriginalGravity(text)}
          keyboardType={'numeric'}
        ></StyledInput>
        <StyledCard>
          <Title>Lúpulo 1</Title>
          <Text>Peso</Text>
          <StyledInput
            value={weight}
            onChangeText={(text) => setWeight(text)}
            keyboardType={'numeric'}
          ></StyledInput>
          <Text>Alfa ácido</Text>
          <StyledInput
            value={alphaAcid}
            onChangeText={(text) => setAlphaAcid(text)}
            keyboardType={'numeric'}
          ></StyledInput>
          <Text>Tempo de Fervura(min)</Text>
          <StyledInput
            value={boilTime}
            onChangeText={(text) => setBoilTime(text)}
            keyboardType={'numeric'}
          ></StyledInput>
        </StyledCard>
        <StyledButton onPress={addHops}>
          <Text>Add Hops</Text>
        </StyledButton>
        <StyledButton onPress={() => navigation.navigate('Results')}>
          <Text>Result</Text>
        </StyledButton>
      </StyledCard>
    </StyledView>
  );
}
