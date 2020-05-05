import React, { useState } from 'react';
import { HomeScreenNavigationProp } from '../types';
import { Text } from 'react-native';
import { StyledView } from '../components/StyledComponents/View/index';

import { HopInterface } from '../types';
import { StyledCard, HopList, AddHopForm } from '../components';
import { ScrollView } from 'react-native-gesture-handler';
import { AddHop, RemoveHop } from '../types/index';

type Props = {
  navigation: HomeScreenNavigationProp;
};

const Hops: HopInterface[] = [];

export const IbuCalculator: React.FC<Props> = ({ navigation }) => {
  const [hops, setHops] = useState(Hops);
  const [addHopMode, setAddHopMode] = useState(false);

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

  const renderResultOrHopForm = (): JSX.Element => {
    if (addHopMode) {
      return (
        <StyledCard>
          <AddHopForm addHop={addHop} toggleMode={toggleMode}></AddHopForm>
        </StyledCard>
      );
    }
    return (
      <StyledCard>
        <Text>Resultado</Text>
        <Text>IBU: 85</Text>
      </StyledCard>
    );
  };

  return (
    <ScrollView>
      <StyledView>
        <StyledCard>
          <Text>Parâmetros Iniciais</Text>
          <Text>Volume Final (L)</Text>
          <Text>Densidade Inicial (OG)</Text>
        </StyledCard>

        <StyledCard>
          <HopList
            removeHop={removeHop}
            hops={hops}
            toggleMode={toggleMode}
          ></HopList>
        </StyledCard>

        {renderResultOrHopForm()}
      </StyledView>
    </ScrollView>
  );
};
