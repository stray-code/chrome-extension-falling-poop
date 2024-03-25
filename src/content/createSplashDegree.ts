export const createSplashDegree = () => {
  const plusOrMinus = Math.random() - 0.5 > 0 ? 1 : -1;
  const degree = Math.random() * 720 * plusOrMinus;

  return { degree };
};
