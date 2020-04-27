import * as React from 'react';
import { Text } from 'react-native';
import {
  StyledButton,
  StyledView,
  StyledCard,
  Title,
  StyledInput
} from '../components';
import { Props } from '../types';

export function IbuCalculator({ navigation }: Props) {
  const pressButton = (): void => {
    navigation.navigate('Results');
  };

  const addHops = () => {
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
  };

  return (
    <StyledView>
      <StyledCard>
        <Text>Volume Final</Text>
        <StyledInput></StyledInput>
        <Text>Original Gravity(OG)</Text>
        <StyledInput></StyledInput>
        {addHops()}
        <StyledButton onPress={addHops}>
          <Text>Add Hops</Text>
        </StyledButton>
        <StyledButton onPress={pressButton}>
          <Text>Result</Text>
        </StyledButton>
      </StyledCard>
    </StyledView>
  );
}
