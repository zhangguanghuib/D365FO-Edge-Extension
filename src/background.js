const URL_TO_OPEN = "https://example.com"; // Replace with the desired URL

chrome.runtime.onInstalled.addListener(() => {
    console.log("Extension installed");
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "openUrl") {
        chrome.tabs.create({ url: URL_TO_OPEN });
        sendResponse({ status: "success" });
    }
});