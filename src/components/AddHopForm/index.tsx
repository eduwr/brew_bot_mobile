import React, { useState } from 'react';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { Text } from 'react-native';
import { AddHop } from '../../types';
import { IbuCalculatorService } from '../../services';
import { ibuConditions, HopInterface } from '../../types/index';

interface Props {
  addHop: AddHop;
  toggleMode: () => void;
  conditions: ibuConditions;
}

export const AddHopForm: React.FC<Props> = ({
  addHop,
  toggleMode,
  conditions
}) => {
  const [weight, setWeight] = useState('');
  const [alphaAcid, setAlphaAcid] = useState('');
  const [boilTime, setBoilTime] = useState('');

  return (
    <>
      <Text>Peso</Text>
      <TextInput
        keyboardType="numeric"
        placeholder="Peso (g)"
        placeholderTextColor="#999"
        value={`${weight}`}
        onChangeText={(text) => {
          setWeight(text);
        }}
      ></TextInput>
      <Text>Alfa Ácido</Text>

      <TextInput
        keyboardType="numeric"
        placeholder="Alfa Ácido (%)"
        placeholderTextColor="#999"
        value={`${alphaAcid}`}
        onChangeText={(text) => {
          setAlphaAcid(text);
        }}
      ></TextInput>
      <Text>Tempo de Fervura</Text>

      <TextInput
        keyboardType="numeric"
        placeholder="Tempo de fervura (min)"
        placeholderTextColor="#999"
        value={`${boilTime}`}
        onChangeText={(text) => {
          setBoilTime(text);
        }}
      ></TextInput>

      <Text>
        IBU contribution:{' '}
        {IbuCalculatorService(conditions, { weight, alphaAcid, boilTime })}
      </Text>

      <TouchableOpacity
        onPress={(e) => {
          addHop({ weight, alphaAcid, boilTime });
          setWeight('');
          setAlphaAcid('');
          setBoilTime('');
          toggleMode();
        }}
      >
        <Text>Submit</Text>
      </TouchableOpacity>
    </>
  );
};
