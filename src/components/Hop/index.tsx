import React from 'react';
import { Text, View } from 'react-native';
import { HopInterface, RemoveHop } from '../../types';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { IbuCalculatorService } from '../../services/IbuCalculatorService';
import { ibuConditions } from '../../types/index';

type Param = {
  hop: HopInterface;
  removeHop: RemoveHop;
  idx: number;
  conditions: ibuConditions;
};

export const Hop: React.FC<Param> = ({
  hop,
  removeHop,
  idx,
  conditions
}): JSX.Element => {
  const ibuCalculator = IbuCalculatorService(conditions, hop);

  return (
    <View>
      <Text>Lúpulo - {idx}</Text>
      <Text>Peso: {hop.weight}</Text>
      <Text>Alfa ácido (%): {hop.alphaAcid}</Text>
      <Text>Tempo de Fervura: {hop.boilTime}</Text>
      <Text>IBU: {ibuCalculator}</Text>
      <TouchableOpacity onPress={() => removeHop(hop)}>
        <Text>Remove</Text>
      </TouchableOpacity>
    </View>
  );
};
