document.addEventListener('DOMContentLoaded', function() {
    chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
        if (request.action === "openUrl") {
            const url = request.url;
            window.open(url, '_blank');
        }
    });
});