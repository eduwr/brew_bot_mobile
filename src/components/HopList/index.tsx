import React from 'react';
import { HopInterface } from '../../types';
import { Text, View } from 'react-native';
import { Hop } from '../Hop';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { RemoveHop } from '../../types/index';

type Param = {
  hops: HopInterface[];
  removeHop: RemoveHop;
  toggleMode: () => void;
};

export const HopList: React.FC<Param> = ({
  hops,
  removeHop,
  toggleMode
}): JSX.Element => {
  return (
    <>
      {hops.map((hop, idx) => (
        <View key={`${idx + 1}`}>
          <Hop hop={hop} idx={idx + 1} removeHop={removeHop} />
        </View>
      ))}
      <TouchableOpacity onPress={() => toggleMode()}>
        <Text>+ Lúpulo</Text>
      </TouchableOpacity>
    </>
  );
};
