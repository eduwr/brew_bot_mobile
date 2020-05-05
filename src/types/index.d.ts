import * as React from 'react';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
export * from './HopCardProps';

export type RootStackParamList = {
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

export interface HopInterface {
  weight: string;
  alphaAcid: string;
  boilTime: string;
}

export interface ibuConditions {
  private endVolume: string;
  private originalGravity: string;
}

export type AddHop = (hop: HopInterface) => void;
export type RemoveHop = (hop: HopInterface) => void;
