import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import {
  SwipableButton,
  Container,
  Header,
  ButtonText,
  ButtonView
} from '../components';

import { HomeScreenNavigationProp, HomeScreenRouteProp } from '../types';

import HeaderImage from '../assets/HeaderImage.svg';

type Props = {
  navigation: HomeScreenNavigationProp;
  route: HomeScreenRouteProp;
};

export const HomeScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <Container>
      <Header>
        <HeaderImage style={styles.svg}></HeaderImage>
      </Header>
      <ButtonView>
        <SwipableButton onPress={() => navigation.navigate('AbvCalculator')}>
          <ButtonText>Calculadora de ABV</ButtonText>
        </SwipableButton>
        <SwipableButton onPress={() => navigation.navigate('IbuCalculator')}>
          <ButtonText>Calculadora de IBU</ButtonText>
        </SwipableButton>
      </ButtonView>
    </Container>
  );
};

const styles = StyleSheet.create({
  svg: {
    flex: 1
  }
});
