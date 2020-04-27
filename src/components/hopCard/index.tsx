import * as React from 'react';
import { Title, StyledInput } from '..';
import { Text } from 'react-native';

interface HopAttributes {
  idx?: number;
  aphaAcid?: number;
  time?: number;
  weight?: number;
}

export function HopCard() {
  return (
    <>
      <Title>Lúpulo 1</Title>
      <Text>Peso</Text>
      <StyledInput></StyledInput>
      <Text>Alfa ácido</Text>
      <StyledInput></StyledInput>
      <Text>Tempo de Fervura(min)</Text>
      <StyledInput></StyledInput>
    </>
  );
}
