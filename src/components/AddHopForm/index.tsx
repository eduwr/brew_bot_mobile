import React, { useState } from 'react';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { Text } from 'react-native';
import { AddHop } from '../../types';

interface Props {
  addHop: AddHop;
  toggleMode: () => void;
}

export const AddHopForm: React.FC<Props> = ({ addHop, toggleMode }) => {
  const [weight, setWeight] = useState(0);
  const [alphaAcid, setAlphaAcid] = useState(0);
  const [boilTime, setBoilTime] = useState(0);

  return (
    <>
      <Text>Peso</Text>
      <TextInput
        keyboardType="numeric"
        placeholder="Peso (g)"
        placeholderTextColor="#999"
        value={`${weight}`}
        onChangeText={(text) => setWeight(parseFloat(text))}
      ></TextInput>
      <Text>Alfa Ácido</Text>

      <TextInput
        keyboardType="numeric"
        placeholder="Alfa Ácido (%)"
        placeholderTextColor="#999"
        value={`${alphaAcid}`}
        onChangeText={(text) => setAlphaAcid(parseFloat(text))}
      ></TextInput>
      <Text>Tempo de Fervura</Text>

      <TextInput
        keyboardType="numeric"
        placeholder="Tempo de fervura (min)"
        placeholderTextColor="#999"
        value={`${boilTime}`}
        onChangeText={(text) => setBoilTime(parseInt(text))}
      ></TextInput>

      <TouchableOpacity
        onPress={(e) => {
          addHop({ weight, alphaAcid, boilTime });
          setWeight(0);
          setAlphaAcid(0);
          setBoilTime(0);
          toggleMode();
        }}
      >
        <Text>Submit</Text>
      </TouchableOpacity>
    </>
  );
};
