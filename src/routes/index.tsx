import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
  createStackNavigator,
  StackNavigationOptions
} from '@react-navigation/stack';

import { RootStackParamList } from '../types';

import {
  HomeScreen,
  ResultScreen,
  AbvCalculator,
  IbuCalculator
} from '../pages';

const Stack = createStackNavigator<RootStackParamList>();

export const Router: React.FC = (): JSX.Element => {
  const stackNavigationOptions = (title: string): StackNavigationOptions => {
    return {
      title,
      headerStyle: {
        backgroundColor: '#1b1f1b'
      },
      headerTintColor: 'rgba(248, 249, 251, 0.8)',
      headerTitleStyle: {
        fontWeight: 'bold'
      }
    };
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={stackNavigationOptions('Home')}
        />
        <Stack.Screen
          name="AbvCalculator"
          component={AbvCalculator}
          options={stackNavigationOptions('Calcular ABV')}
        />
        <Stack.Screen
          name="IbuCalculator"
          component={IbuCalculator}
          options={stackNavigationOptions('Calcular IBU')}
        />
        <Stack.Screen name="Results" component={ResultScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
