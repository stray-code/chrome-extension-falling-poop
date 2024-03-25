import { createSplashPosition, createPoopElement, createSplashDegree } from '.';

import {
  DECREASE_FONT_SIZE,
  REMOVE_POOP_TIME,
  SPLASH_POOP_COUNT,
} from './constants';

export const splashPoop = async (
  centerX: number,
  centerY: number,
  fontSize: number,
) => {
  const poopElement = createPoopElement(fontSize, centerX, centerY);

  poopElement.setAttribute('data-runaway', 'true');
  document.body.appendChild(poopElement);

  // 表示待ち
  await new Promise((resolve) => setTimeout(resolve, 100));

  const { x, y } = createSplashPosition();
  const left = x + centerX;
  const top = y + centerY;

  // スプラッシュ
  poopElement.style.left = `${left}px`;
  poopElement.style.top = `${top}px`;

  if (poopElement.firstChild instanceof HTMLSpanElement) {
    const { degree } = createSplashDegree();
    poopElement.firstChild.style.rotate = `${degree}deg`;
  }

  // スプラッシュの動作待ち
  await new Promise((resolve) => setTimeout(resolve, 600));

  // 小さくなったら削除
  if (fontSize <= 10) {
    poopElement.remove();
    return;
  }

  const handleMouseEnter = () => {
    for (let _ of [...new Array(SPLASH_POOP_COUNT)]) {
      splashPoop(left, top, fontSize - DECREASE_FONT_SIZE);
    }
    poopElement.remove();
  };

  // マウスホバーでスプラッシュ
  poopElement.addEventListener('mouseenter', handleMouseEnter, { once: true });

  setTimeout(() => {
    poopElement.remove();
  }, REMOVE_POOP_TIME);
};
