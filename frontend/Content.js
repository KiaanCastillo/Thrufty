chrome.runtime.onMessage.addListener(receivedMessage);

function receivedMessage (message, sender, sendResponse) {
    console.log(message.txt);
};