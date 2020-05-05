import React, { useState } from 'react';
import { HomeScreenNavigationProp } from '../types';
import { Text } from 'react-native';
import { StyledView } from '../components/StyledComponents/View/index';

import { StyledCard, HopList, AddHopForm } from '../components';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import { AddHop, RemoveHop, HopInterface, ibuConditions } from '../types';
import { IbuCalculatorService } from '../services/IbuCalculatorService';

type Props = {
  navigation: HomeScreenNavigationProp;
};

const Hops: HopInterface[] = [];

export const IbuCalculator: React.FC<Props> = ({ navigation }) => {
  const [hops, setHops] = useState(Hops);
  const [addHopMode, setAddHopMode] = useState(false);
  const [endVolume, setEndVolume] = useState('');
  const [originalGravity, setOriginalGravity] = useState('');

  const initialParamsForm = () => {
    return (
      <>
        <Text>Volume Final</Text>
        <TextInput
          value={endVolume}
          onChangeText={(text) => setEndVolume(text)}
          keyboardType="numeric"
          placeholder="Insira o volume final..."
          placeholderTextColor="#AAA"
        ></TextInput>
        <Text>Densidade Inicial (OG)</Text>
        <TextInput
          value={originalGravity}
          onChangeText={(text) => setOriginalGravity(text)}
          keyboardType="numeric"
          placeholder="Insira a densidade inicial..."
          placeholderTextColor="#AAA"
        ></TextInput>
      </>
    );
  };

  const addHop: AddHop = (newHop: HopInterface) => {
    setHops([...hops, newHop]);
  };

  const removeHop: RemoveHop = (currentHop) => {
    const newHopList = hops.filter((hop) => hop !== currentHop);
    setHops(newHopList);
  };

  const toggleMode = (): void => {
    setAddHopMode(!addHopMode);
  };

  const ibuReducer = (arr: HopInterface[]): number => {
    if (arr.length === 0) {
      return 0;
    }

    const ibuArr = arr.map((element) => {
      return Number(
        IbuCalculatorService({ endVolume, originalGravity }, element)
      );
    });

    return ibuArr.reduce((previous, current) => (previous += current));
  };

  const renderResultOrHopForm = (): JSX.Element => {
    if (addHopMode) {
      return (
        <StyledCard>
          <AddHopForm
            conditions={{ endVolume, originalGravity }}
            addHop={addHop}
            toggleMode={toggleMode}
          ></AddHopForm>
        </StyledCard>
      );
    }
    return (
      <StyledCard>
        <Text>Resultado</Text>
        <Text>IBU: {ibuReducer(hops)}</Text>
      </StyledCard>
    );
  };

  return (
    <ScrollView>
      <StyledView>
        <StyledCard>
          {initialParamsForm()}
          <Text>Parâmetros Iniciais</Text>
          <Text>Volume Final {endVolume} (L) </Text>
          <Text>Densidade Inicial {originalGravity} (OG)</Text>
        </StyledCard>

        <StyledCard>
          <HopList
            removeHop={removeHop}
            hops={hops}
            toggleMode={toggleMode}
            conditions={{ endVolume, originalGravity }}
          ></HopList>
        </StyledCard>

        {renderResultOrHopForm()}
      </StyledView>
    </ScrollView>
  );
};
