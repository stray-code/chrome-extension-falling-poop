import { createInitialPosition, createPoopElement, splashPoop } from '.';

import {
  DECREASE_FONT_SIZE,
  POOP_FONT_SIZE,
  REMOVE_POOP_TIME,
  SPLASH_POOP_COUNT,
} from './constants';

export const fallPoop = async () => {
  const { x: left, y: top } = createInitialPosition();

  // 最初はウィンドウの上の見えない部分に表示
  const initialTop = window.scrollY - 100;
  const poopElement = createPoopElement(POOP_FONT_SIZE, left, initialTop);

  document.body.appendChild(poopElement);

  // 表示待ち
  await new Promise((resolve) => setTimeout(resolve, 100));

  // 落下
  poopElement.style.top = `${top}px`;

  const handleMouseEnter = () => {
    for (let _ of [...new Array(SPLASH_POOP_COUNT)]) {
      splashPoop(left, top, POOP_FONT_SIZE - DECREASE_FONT_SIZE);
    }
    poopElement.remove();
  };

  // マウスホバーでスプラッシュ
  poopElement.addEventListener('mouseenter', handleMouseEnter, { once: true });

  setTimeout(() => {
    poopElement.remove();
  }, REMOVE_POOP_TIME);
};
