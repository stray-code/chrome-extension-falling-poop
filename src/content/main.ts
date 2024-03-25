import { fallPoops } from '.';

import './style.css';

// backgroundから受信
chrome.runtime.onMessage.addListener(async (message) => {
  if (message.type === 'POOP') {
    document.addEventListener('click', fallPoops);
  }
});
