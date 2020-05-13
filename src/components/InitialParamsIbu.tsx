import React from 'react';
import { StyledView } from './StyledComponents';
import { AnimatedWidthParamInput } from './AnimatedWidthParamInput';

interface Param {
  endVolume: string;
  originalGravity: string;
  setEndVolume: React.Dispatch<React.SetStateAction<string>>;
  setOriginalGravity: React.Dispatch<React.SetStateAction<string>>;
}

export const InitialParamsIbu: React.FC<Param> = ({
  endVolume,
  setEndVolume,
  originalGravity,
  setOriginalGravity
}): JSX.Element => {
  return (
    <StyledView align="flex-end" marginBottom={15}>
      <AnimatedWidthParamInput
        finalWidth={64}
        value={endVolume}
        setValue={setEndVolume}
        placeholder="25 L"
        title="Volume Final"
      ></AnimatedWidthParamInput>
      <AnimatedWidthParamInput
        finalWidth={88}
        value={originalGravity}
        setValue={setOriginalGravity}
        placeholder="1.05 g/mL"
        title="Densidade Inicial (OG)"
      ></AnimatedWidthParamInput>
    </StyledView>
  );
};
