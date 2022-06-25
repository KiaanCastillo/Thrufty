console.log("background running ...");

chrome.action.onClicked.addListener(async (tab) => {
    // make API calls to get a list of products from different sites
    let msg = {
        txt: "hey"
    };

    chrome.tabs.sendMessage(tab.id, msg);
});