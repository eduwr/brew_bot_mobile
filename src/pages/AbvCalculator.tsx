import * as React from 'react';
import { Text } from 'react-native';
import {
  StyledButton,
  StyledView,
  StyledText,
  StyledCard,
  Title,
  StyledInput
} from '../components';
import { Props } from '../types';

export function AbvCalculator({ navigation }: Props) {
  const pressButton = () => {
    navigation.navigate('Results');
  };

  return (
    <StyledView>
      <StyledCard>
        <Title>Densidade Original</Title>
        <Text>Leitura do densímetro</Text>
        <StyledInput></StyledInput>
        <Text>Temperatura</Text>
        <StyledInput></StyledInput>
        <Text>Densidade Corrigida</Text>
        <StyledInput></StyledInput>
      </StyledCard>
      <StyledCard>
        <Title>Densidade Final</Title>
        <Text>Leitura do densímetro</Text>
        <StyledInput></StyledInput>
        <Text>Temperatura</Text>
        <StyledInput></StyledInput>
        <Text>Densidade Corrigida</Text>
        <StyledInput></StyledInput>
      </StyledCard>
      <StyledButton onPress={pressButton}>
        <StyledText>Calular ABV</StyledText>
      </StyledButton>
    </StyledView>
  );
}
