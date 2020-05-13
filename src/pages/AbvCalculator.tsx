import React, { useState } from 'react';
import { Text, StyleSheet } from 'react-native';
import { AbvCalculatorService } from '../services/AbvCalculatorService';
import {
  StyledView,
  StyledCard,
  Title,
  StyledInput,
  Header,
  InitialParamsAbv,
  ScrollContainer
} from '../components';
import { HomeScreenNavigationProp, HomeScreenRouteProp } from '../types';

import HeaderImage from '../assets/HeaderImage.svg';

type Props = {
  navigation: HomeScreenNavigationProp;
  route: HomeScreenRouteProp;
};

export const AbvCalculator: React.FC<Props> = ({ navigation }) => {
  const [originalGravity, setOriginalGravity] = useState('');
  const [initialTemperature, setInitialTemperature] = useState('');

  const [finalGravity, setFinalGravity] = useState('');
  const [finalTemperature, setFinalTemperature] = useState('');

  return (
    <ScrollContainer>
      <Header>
        <HeaderImage style={styles.svg}></HeaderImage>
      </Header>

      <InitialParamsAbv
        originalGravity={originalGravity}
        initialTemperature={initialTemperature}
        setInitialTemperature={setInitialTemperature}
        setOriginalGravity={setOriginalGravity}
      ></InitialParamsAbv>

      {/* 
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
          value={initialtemperature}
          onChangeText={(text) => setInitialTemperature(text)}
          placeholder="20 °C"
        ></StyledInput>
        <Text>
          Densidade Corrigida:
          {originalGravity + initialtemperature}
        </Text>
</StyledCard> */}
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
    </ScrollContainer>
  );
};

const styles = StyleSheet.create({
  svg: {
    flex: 1
  }
});
