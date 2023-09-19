// background.jsにメッセージを送信
chrome.runtime.sendMessage({
  message: 'contextscript.jsからbackground.jsに送るメッセージ',
})

// メッセージが受信された時に実行する処理
chrome.runtime.onMessage.addListener((message) => {
  console.log(message.message)
})
