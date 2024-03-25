chrome.runtime.onInstalled.addListener(() => {
  // コンテキストメニューに追加
  chrome.contextMenus.create({
    id: 'poop',
    title: 'Click here to activate falling poop.',
    contexts: ['all'],
  });
});

// コンテキストメニューがクリックされたら発火
chrome.contextMenus.onClicked.addListener(async (info, tab) => {
  if (!tab || !tab.id) {
    return;
  }

  if (info.menuItemId === 'poop') {
    // content_scriptsに送信
    chrome.tabs.sendMessage(tab.id, { type: 'POOP' });
  }
});
