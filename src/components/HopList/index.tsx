import React from 'react';
import { HopInterface } from '../../types';
import { Text, View } from 'react-native';
import { Hop } from '../Hop';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { RemoveHop, ibuConditions } from '../../types/index';

type Param = {
  hops: HopInterface[];
  removeHop: RemoveHop;
  toggleMode: () => void;
  conditions: ibuConditions;
};

export const HopList: React.FC<Param> = ({
  hops,
  removeHop,
  toggleMode,
  conditions
}): JSX.Element => {
  return (
    <>
      {hops.map((hop, idx) => (
        <View key={`${idx + 1}`}>
          <Hop
            hop={hop}
            idx={idx + 1}
            removeHop={removeHop}
            conditions={conditions}
          />
        </View>
      ))}
      <TouchableOpacity onPress={() => toggleMode()}>
        <Text>+ Lúpulo</Text>
      </TouchableOpacity>
    </>
  );
};
