import React, { useState } from 'react';
import { HomeScreenNavigationProp } from '../types';
import { StyleSheet } from 'react-native';

import {
  HopList,
  AddHopForm,
  Header,
  ScrollContainer,
  InitialParamsForm,
  ResultView
} from '../components';

import { AddHop, RemoveHop, HopInterface } from '../types';
import HeaderImage from '../assets/HeaderImage.svg';

type Props = {
  navigation: HomeScreenNavigationProp;
};

const Hops: HopInterface[] = [];

export const IbuCalculator: React.FC<Props> = ({ navigation }) => {
  const [hops, setHops] = useState(Hops);
  const [addHopMode, setAddHopMode] = useState(true);
  const [endVolume, setEndVolume] = useState('');
  const [originalGravity, setOriginalGravity] = useState('');

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

  const renderAddHopForm = (): JSX.Element | void => {
    if (addHopMode) {
      return (
        <AddHopForm
          conditions={{ endVolume, originalGravity }}
          addHop={addHop}
          toggleMode={toggleMode}
        ></AddHopForm>
      );
    }
  };

  return (
    <ScrollContainer>
      <Header>
        <HeaderImage style={styles.svg}></HeaderImage>
      </Header>

      <InitialParamsForm
        endVolume={endVolume}
        setEndVolume={setEndVolume}
        originalGravity={originalGravity}
        setOriginalGravity={setOriginalGravity}
      />

      <HopList
        removeHop={removeHop}
        hops={hops}
        toggleMode={toggleMode}
        addHopMode={addHopMode}
        conditions={{ endVolume, originalGravity }}
      ></HopList>

      {renderAddHopForm()}

      <ResultView
        endVolume={endVolume}
        originalGravity={originalGravity}
        hops={hops}
      ></ResultView>
    </ScrollContainer>
  );
};

const styles = StyleSheet.create({
  svg: {
    flex: 1
  }
});
