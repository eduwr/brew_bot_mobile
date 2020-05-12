import React from 'react';
import { HopInterface } from '../types';
import { Hop } from './Hop';
import { RemoveHop, ibuConditions } from '../types/index';

import {
  TouchableButton,
  StyledText,
  HopListTitleWrapper,
  TextWrapper,
  StyledView
} from './StyledComponents';

import AddHopButton from '../assets/PlusButton.svg';

type Param = {
  hops: HopInterface[];
  removeHop: RemoveHop;
  toggleMode: () => void;
  conditions: ibuConditions;
  addHopMode: boolean;
};

export const HopList: React.FC<Param> = ({
  hops,
  removeHop,
  toggleMode,
  conditions,
  addHopMode
}): JSX.Element => {
  return (
    <StyledView align="flex-start" background="#5b6239">
      <HopListTitleWrapper>
        <TextWrapper>
          <StyledText color="white" size="big">
            Lúpulo
          </StyledText>
        </TextWrapper>

        <TouchableButton hidden={addHopMode} onPress={() => toggleMode()}>
          <AddHopButton height="50px" width="50px" />
        </TouchableButton>
      </HopListTitleWrapper>
      {hops.map((hop, idx) => (
        <Hop
          key={`${idx + 1}`}
          hop={hop}
          idx={idx + 1}
          removeHop={removeHop}
          conditions={conditions}
          addHopMode={addHopMode}
        />
      ))}
    </StyledView>
  );
};
