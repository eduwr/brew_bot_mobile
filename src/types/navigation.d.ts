import * as React from 'react';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
export * from './HopCardProps';

type RootStackParamList = {
  Home: undefined;
  AbvCalculator: undefined;
  Results: undefined;
  IbuCalculator: undefined;
};

export type HomeScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Home'
>;
export type HomeScreenRouteProp = RouteProp<RootStackParamList, 'Home'>;
