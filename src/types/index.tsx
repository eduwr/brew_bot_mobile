import * as React from 'react';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

export type RootStackParamList = {
  Home: undefined;
  AbvCalculator: undefined;
  Results: undefined;
  IbuCalculator: undefined;
};

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;
type HomeScreenRouteProp = RouteProp<RootStackParamList, 'Home'>;

export type Props = {
  navigation: HomeScreenNavigationProp;
  route: HomeScreenRouteProp;
};
