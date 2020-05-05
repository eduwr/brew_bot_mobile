import React from 'react';
import { Text, View } from 'react-native';
import { HopInterface, RemoveHop } from '../../types';
import { TouchableOpacity } from 'react-native-gesture-handler';

type Param = {
  hop: HopInterface;
  removeHop: RemoveHop;
  idx: number;
};

export const Hop: React.FC<Param> = ({ hop, removeHop, idx }): JSX.Element => {
  return (
    <View>
      <Text>Lúpulo - {idx}</Text>
      <Text>Peso: {hop.weight}</Text>
      <Text>Alfa ácido (%): {hop.alphaAcid}</Text>
      <Text>Tempo de Fervura: {hop.boilTime}</Text>
      <Text>IBU: {hop.weight + hop.alphaAcid + hop.boilTime}</Text>
      <TouchableOpacity onPress={() => removeHop(hop)}>
        <Text>Remove</Text>
      </TouchableOpacity>
    </View>
  );
};
