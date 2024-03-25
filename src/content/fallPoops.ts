import { fallPoop } from '.';

import { FALL_POOP_COUNT } from './constants';

export const fallPoops = async () => {
  for (let _ of [...new Array(FALL_POOP_COUNT)]) {
    fallPoop();
    // 順番に落下させるため待ち
    await new Promise((resolve) => setTimeout(resolve, 30));
  }
};
