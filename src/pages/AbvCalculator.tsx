import React, { useState } from 'react';
import { Text } from 'react-native';
import { AbvCalculatorService } from '../services/AbvCalculatorService';
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
  HomeScreenRouteProp,
  Density
} from '../types';

type Props = {
  navigation: HomeScreenNavigationProp;
  route: HomeScreenRouteProp;
};

export const AbvCalculator: React.FC<Props> = ({ navigation }) => {
  const [originalGravity, setOriginalGravity] = useState('');
  const [originalTemperature, setOriginalTemperature] = useState('');

  const [finalGravity, setFinalGravity] = useState('');
  const [finalTemperature, setFinalTemperature] = useState('');

  return (
    <StyledView>
      <StyledCard>
        <Title>Densidade Original</Title>
        <Text>Leitura do densímetro</Text>
        <StyledInput
          keyboardType="numeric"
          value={originalGravity}
          onChangeText={(text) => setOriginalGravity(text)}
          placeholder="1.05"
        ></StyledInput>
        <Text>Temperatura</Text>
        <StyledInput
          keyboardType="numeric"
          value={originalTemperature}
          onChangeText={(text) => setOriginalTemperature(text)}
          placeholder="20 °C"
        ></StyledInput>
        <Text>
          Densidade Corrigida:
          {originalGravity + originalTemperature}
        </Text>
      </StyledCard>
      <StyledCard>
        <Title>Densidade Final</Title>
        <Text>Leitura do densímetro</Text>
        <StyledInput
          keyboardType="numeric"
          value={finalGravity}
          onChangeText={(text) => setFinalGravity(text)}
          placeholder="1.05"
        ></StyledInput>
        <Text>Temperatura</Text>
        <StyledInput
          keyboardType="numeric"
          value={finalTemperature}
          onChangeText={(text) => setFinalTemperature(text)}
          placeholder="20 °C"
        ></StyledInput>
        <Text>Densidade Corrigida: {finalGravity + finalTemperature}</Text>
      </StyledCard>
      <StyledCard>
        <Text>
          Resultado: {AbvCalculatorService(originalGravity, finalGravity)}
        </Text>
      </StyledCard>
    </StyledView>
  );
};
