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

import {
  HomeScreenNavigationProp,
  HomeScreenRouteProp
} from '../types';

type Props = {
  navigation: HomeScreenNavigationProp;
  route: HomeScreenRouteProp;
};

export const HomeScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <StyledView>
      <StyledCard>
        <StyledButton onPress={() => navigation.navigate('AbvCalculator')}>
          <StyledText>Caluladora de ABV</StyledText>
        </StyledButton>
        <StyledButton onPress={() => navigation.navigate('IbuCalculator')}>
          <StyledText>Calculadora de IBU</StyledText>
        </StyledButton>
      </StyledCard>
    </StyledView>
  );
};
