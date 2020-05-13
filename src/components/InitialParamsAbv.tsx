import React from 'react';
import { StyledView } from './StyledComponents';
import { AnimatedWidthParamInput } from './AnimatedWidthParamInput';

interface Param {
  initialTemperature: string;
  originalGravity: string;
  setInitialTemperature: React.Dispatch<React.SetStateAction<string>>;
  setOriginalGravity: React.Dispatch<React.SetStateAction<string>>;
}

export const InitialParamsAbv: React.FC<Param> = ({
  initialTemperature,
  setInitialTemperature,
  originalGravity,
  setOriginalGravity
}): JSX.Element => {
  const fixScaleTemperature = (temperature: string): string => {
    return temperature;
  };
  return (
    <StyledView align="flex-end" marginBottom={15}>
      <AnimatedWidthParamInput
        finalWidth={72}
        value={originalGravity}
        setValue={setOriginalGravity}
        placeholder="1.05 g/mL"
        title="Densidade Inicial"
      ></AnimatedWidthParamInput>
      <AnimatedWidthParamInput
        finalWidth={80}
        value={initialTemperature}
        setValue={setInitialTemperature}
        placeholder="20 °C"
        title="Temperatura Inicial"
      ></AnimatedWidthParamInput>
      <AnimatedWidthParamInput
        finalWidth={88}
        value={fixScaleTemperature(initialTemperature)}
        setValue={setInitialTemperature}
        title="Temperatura Corrigida"
      ></AnimatedWidthParamInput>
    </StyledView>
  );
};
