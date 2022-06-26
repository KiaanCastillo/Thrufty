console.log("background running ...");

// Listener for any message coming to BG
// Make API call (mock for now)
// Send response as msg json to tab.id (w Mock data for now)

// chrome.action.onClicked.addListener((tab) => {
//     // make API calls to get a list of products from different sites
//     let msg = {
//         txt: "hey"
//     };

//     chrome.tabs.sendMessage(tab.id, msg);
// });

chrome.runtime.onMessage.addListener(function(myMessage, sender, sendResponse){
    //do something that only the extension has privileges here
    let msg = {
        txt: "hey"
    };
    chrome.tabs.sendMessage(sender, msg);
    return true;
 });