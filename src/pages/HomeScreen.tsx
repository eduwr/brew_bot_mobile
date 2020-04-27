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
import { Props, RootStackParamList } from '../types';

export function HomeScreen({ navigation, route }: Props) {
  const pressButton = () => {
    navigation.navigate('IbuCalculator');
    console.log(route.key);
  };

  return (
    <StyledView>
      <StyledCard>
        <StyledButton onPress={() => pressButton()}>
          <StyledText>Caluladora de ABV</StyledText>
        </StyledButton>
        <StyledButton onPress={() => pressButton()}>
          <StyledText>Calculadora de IBU</StyledText>
        </StyledButton>
      </StyledCard>
    </StyledView>
  );
}
