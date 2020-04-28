import React, { useState, useEffect } from 'react';
import { Title, StyledInput, StyledCard } from '..';
import { Text } from 'react-native';
import { HopCardPropType } from '../../types/';

export function HopCard(props: HopCardPropType): JSX.Element {
  const { index } = props;
  const [weight, setWeight] = useState(0);
  const [alphaAcid, setAlphaAcid] = useState(0);
  const [boilTime, setBoilTime] = useState(0);
  const [IBU, setIBU] = useState(0);

  useEffect(() => {
    setIBU(weight + alphaAcid + boilTime);
  }, [weight, alphaAcid, boilTime]);

  return (
    <StyledCard>
      <Title>
        Lúpulo {index + 1} - IBU: {IBU}
      </Title>
      <Text>Peso</Text>
      <StyledInput
        value={`${weight}`}
        onChangeText={(text) =>
          text ? setWeight(parseInt(text)) : setWeight(0)
        }
        keyboardType="numeric"
      ></StyledInput>
      <Text>Alfa ácido</Text>
      <StyledInput
        value={`${alphaAcid}`}
        onChangeText={(text) =>
          text ? setAlphaAcid(parseInt(text)) : setAlphaAcid(0)
        }
        keyboardType="numeric"
      ></StyledInput>
      <Text>Tempo de Fervura(min)</Text>
      <StyledInput
        value={`${boilTime}`}
        onChangeText={(text) =>
          text ? setBoilTime(parseInt(text)) : setBoilTime(0)
        }
        keyboardType="numeric"
      ></StyledInput>
    </StyledCard>
  );
}
