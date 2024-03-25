export const createInitialPosition = () => {
  const { scrollX, scrollY, innerWidth, innerHeight } = window;

  const x = Math.floor(Math.random() * innerWidth) + scrollX;
  const y = Math.floor(Math.random() * innerHeight) + scrollY;

  return { x, y };
};
