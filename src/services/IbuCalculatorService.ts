import { HopInterface, ibuConditions } from '../types/index';

export const IbuCalculatorService = (
  conditions: ibuConditions,
  hop: HopInterface
) => {
  const hopUtilizationParam = (gravity: string, time: string): number => {
    const funcOfTime = (1 - Math.exp(-0.04 * Number(time))) / 4.15;
    const funcOfGravity = 1.65 * Math.pow(0.000125, Number(gravity) - 1);
    return funcOfGravity * funcOfTime;
  };

  const correctionFactor = (gravity: string) =>
    Number(gravity) >= 1.05 ? 1 + (Number(gravity) - 1.05) / 2 : 1;

  const U = hopUtilizationParam(conditions.originalGravity, hop.boilTime);
  const P = Number(hop.weight) * 1000;
  const A = Number(hop.alphaAcid) / 100;
  const V = Number(conditions.endVolume);
  const C = correctionFactor(conditions.originalGravity);

  const result = (U * P * A) / (V * C);

  return result.toString();

  /*
References:
  hopUtilizationParam - http://howtobrew.com/book/section-1/hops/hop-bittering-calculations
  IBU - http://www.backtoschoolbrewing.com/blog/2016/9/5/how-to-calculate-ibus


  IBU = WxU%xAA%x1000 / Volume X Cgravity

  Tinseth formula https://www.homebrewtalk.com/threads/impress-your-friends-analyzing-the-tinseth-formula.678566/

  https://concerveja.com.br/calcular-ibu/
*/
};
