import * as React from 'react';
import { Text } from 'react-native';
// import { Props } from '../types';
import {
  StyledButton,
  StyledView,
  StyledText,
  StyledCard,
  Title,
  StyledInput
} from '../components';

export function ResultScreen() {
  return (
    <StyledView>
      <StyledCard>
        <Title>Resultados</Title>
        <Text>Densidade Original: 1.25</Text>
        <Text>Densidade Final: 1.02</Text>
        <Text>Temperatura: 22 °C</Text>
        <Text>ABV(%)</Text>

        <StyledCard>
          <Title>5.47</Title>
        </StyledCard>
      </StyledCard>
    </StyledView>
  );
}
