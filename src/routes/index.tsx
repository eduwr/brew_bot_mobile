import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { RootStackParamList } from '../types';
import {
  HomeScreen,
  ResultScreen,
  AbvCalculator,
  IbuCalculator
} from '../pages';

const Stack = createStackNavigator<RootStackParamList>();

export function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'BrewBot' }}
        />
        <Stack.Screen
          name="AbvCalculator"
          component={AbvCalculator}
          options={{ title: 'Calcular ABV(%)' }}
        />
        <Stack.Screen
          name="IbuCalculator"
          component={IbuCalculator}
          options={{ title: 'Calcular Ibu' }}
        />
        <Stack.Screen name="Results" component={ResultScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
