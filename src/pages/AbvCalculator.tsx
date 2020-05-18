import React, { useState } from 'react';
import { Text, StyleSheet, Image, View, TextInput } from 'react-native';

import {
  AbvCalculatorService,
  HydrometerDensityCorrection
} from '../services/AbvCalculatorService';

import { HomeScreenNavigationProp, HomeScreenRouteProp } from '../types';

type Props = {
  navigation: HomeScreenNavigationProp;
  route: HomeScreenRouteProp;
};

export const AbvCalculator: React.FC<Props> = ({ navigation }) => {
  const [originalGravity, setOriginalGravity] = useState('');
  const [initialTemperature, setInitialTemperature] = useState('');

  const [finalGravity, setFinalGravity] = useState('');
  const [finalTemperature, setFinalTemperature] = useState('');

  return (
    <View>
      <Image
        source={require('../assets/BackgroundABV.jpg')}
        style={styles.image}
      />
      <View style={styles.form}>
        <View style={styles.wrapInputs}>
          <Text style={styles.title}>Densidade Original</Text>
          <View style={styles.inputView}>
            <Text style={styles.name}>Leitura do densímetro:</Text>
            <View style={styles.valueContainer}>
              <TextInput
                style={styles.input}
                value={originalGravity}
                onChangeText={(text) => setOriginalGravity(text)}
                keyboardType="numeric"
                placeholder="insira a densidade inicial"
                placeholderTextColor="rgba(0, 0, 0, 0.4)"
              ></TextInput>
            </View>
          </View>
          <View style={styles.inputView}>
            <Text style={styles.name}>Temperatura:</Text>
            <View style={styles.valueContainer}>
              <TextInput
                style={styles.input}
                value={initialTemperature}
                onChangeText={(text) => setInitialTemperature(text)}
                keyboardType="numeric"
                placeholder="20 ºC"
                placeholderTextColor="rgba(0, 0, 0, 0.4)"
              ></TextInput>
            </View>
          </View>
          <View style={styles.inputView}>
            <Text style={styles.name}>Densidade Corrigida: </Text>
            <View style={styles.valueContainer}>
              <Text>
                {HydrometerDensityCorrection(
                  originalGravity,
                  initialTemperature,
                  3
                )}
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.wrapInputs}>
          <Text style={styles.title}>Densidade Final</Text>
          <View style={styles.inputView}>
            <Text style={styles.name}>Leitura do densímetro:</Text>
            <View style={styles.valueContainer}>
              <TextInput
                style={styles.input}
                value={finalGravity}
                onChangeText={(text) => setFinalGravity(text)}
                keyboardType="numeric"
                placeholder="insira a densidade inicial"
                placeholderTextColor="rgba(0, 0, 0, 0.4)"
              ></TextInput>
            </View>
          </View>
          <View style={styles.inputView}>
            <Text style={styles.name}>Temperatura:</Text>
            <View style={styles.valueContainer}>
              <TextInput
                style={styles.input}
                value={finalTemperature}
                onChangeText={(text) => setFinalTemperature(text)}
                keyboardType="numeric"
                placeholder="20 ºC"
                placeholderTextColor="rgba(0, 0, 0, 0.4)"
              ></TextInput>
            </View>
          </View>
          <View style={styles.inputView}>
            <Text style={styles.name}>Densidade Corrigida: </Text>
            <View style={styles.valueContainer}>
              <Text>
                {HydrometerDensityCorrection(finalGravity, finalTemperature, 3)}
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.inputView}>
          <Text style={styles.title}>Teor alcoólico</Text>
          <View style={styles.valueContainer}>
            <Text>
              {AbvCalculatorService(
                HydrometerDensityCorrection(
                  originalGravity,
                  initialTemperature
                ),
                HydrometerDensityCorrection(finalGravity, finalTemperature)
              )}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EEA54E',
    flexDirection: 'column'
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover'
  },
  form: {
    position: 'absolute',
    alignSelf: 'center',
    marginTop: 50,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: 20,
    width: '88%'
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'rgba(0, 0, 0, 0.9)'
  },
  inputView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  name: {
    fontSize: 18,
    marginTop: 15,
    color: 'rgba(0, 0, 0, 0.7)'
  },
  input: {
    fontSize: 15,

    padding: 5,
    marginTop: 10,
    textAlign: 'center'
  },
  result: {
    fontSize: 15,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    width: '100%',
    padding: 10,
    marginTop: 10
  },
  valueContainer: {
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, 0.5)',
    width: 70,
    alignItems: 'center',
    justifyContent: 'center'
  },
  wrapInputs: {
    marginVertical: 20
  }
});
