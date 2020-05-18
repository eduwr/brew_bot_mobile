export const HydrometerDensityCorrection = (
  reading = '1.05',
  temperature: string,
  decimalPlaces = 2
): string => {
  if (!temperature) {
    return reading;
  }

  const convertCelciustoFeirenheit = (tempCelcius: number): number =>
    tempCelcius * (9 / 5) + 32;

  const r = Number(reading);
  const t = convertCelciustoFeirenheit(Number(temperature));
  const c = convertCelciustoFeirenheit(20);

  const correctedReading =
    r *
    ((1.00130346 -
      0.000134722124 * t +
      0.00000204052596 * Math.pow(t, 2) -
      0.00000000232820948 * Math.pow(t, 3)) /
      (1.00130346 -
        0.000134722124 * c +
        0.00000204052596 * Math.pow(c, 2) -
        0.00000000232820948 * Math.pow(c, 3)));

  return correctedReading.toFixed(decimalPlaces).toString();
};

export const AbvCalculatorService = (
  originalGravity: string,
  finalGravity: string,
  decimalPlaces = 2
): string => {
  if (!originalGravity && !finalGravity) {
    return '0.00';
  }
  const result = 131.25 * (Number(originalGravity) - Number(finalGravity));
  return result.toFixed(decimalPlaces).toString();
};

// corrected-reading = r * ((1.00130346 - (0.000134722124 * t) + (0.00000204052596 * t2) - (0.00000000232820948 * t3)) / (1.00130346 - (0.000134722124 * c) + (0.00000204052596 * c2) - (0.00000000232820948 * c3)))

// Where:
// r = reading
// c = calibration temperature

// This expression is based on °F, so the temperatures are first converted.
