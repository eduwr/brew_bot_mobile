import React, { useEffect, useState, SetStateAction, Dispatch } from 'react';
import { Text, View } from 'react-native';
import { StyledButton, StyledInput, StyledCard, HopCard } from '../components';
import { ScrollView } from 'react-native-gesture-handler';
import { HomeScreenNavigationProp } from '../types/navigation';

type Props = {
  navigation: HomeScreenNavigationProp;
};

export const IbuCalculator: React.FC<Props> = ({ navigation }) => {
  useEffect(() => {}, []);

  const [counter, setCounter]: [
    number,
    Dispatch<SetStateAction<number>>
  ] = useState(0);

  const [endVolume, setEndVolume] = useState(0);
  const [originalGravity, setOriginalGravity] = useState(0);

  function hopCards() {
    let cards = [];
    for (let i = 0; i <= counter; i++) {
      cards.push(
        <HopCard index={i} key={`hop-${i}`} id={`hop-${i}`}></HopCard>
      );
    }
    return cards.map((hop) => hop);
  }

  function addHop() {
    setCounter(counter + 1);
  }

  function removeHop() {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  }

  return (
    <ScrollView>
      <StyledCard>
        <Text>Volume Final - {endVolume}</Text>
        <StyledInput
          value={`${endVolume}`}
          onChangeText={(text) =>
            text ? setEndVolume(parseFloat(text)) : setEndVolume(0)
          }
          keyboardType={'numeric'}
        ></StyledInput>
        <Text>Original Gravity(OG) - {originalGravity}</Text>
        <StyledInput
          value={`${originalGravity}`}
          onChangeText={(text) =>
            text ? setOriginalGravity(parseFloat(text)) : setOriginalGravity(0)
          }
          keyboardType={'numeric'}
        ></StyledInput>

        <View>{hopCards()}</View>

        <StyledButton onPress={() => addHop()}>
          <Text>Add Hop</Text>
        </StyledButton>
        <StyledButton onPress={() => removeHop()}>
          <Text>Remove Hops</Text>
        </StyledButton>
        <StyledButton onPress={() => navigation.navigate('Results')}>
          <Text>Result</Text>
        </StyledButton>
      </StyledCard>
    </ScrollView>
  );
};
