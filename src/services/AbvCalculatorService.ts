export const AbvCalculatorService = (
  originalGravity: string,
  finalGravity: string
): string => {
  const result = 131.25 * (Number(originalGravity) - Number(finalGravity));
  return result.toFixed(2).toString();
};
