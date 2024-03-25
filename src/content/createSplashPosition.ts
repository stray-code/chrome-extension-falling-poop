import { SPLASH_DISTANCE } from './constants';

export const createSplashPosition = () => {
  const r = SPLASH_DISTANCE * Math.sqrt(Math.random());
  const theta = Math.random() * 2 * Math.PI;
  const x = r * Math.cos(theta);
  const y = r * Math.sin(theta);

  return { x, y };
};
