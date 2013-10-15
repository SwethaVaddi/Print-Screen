function screenshot() {

    chrome.tabs.captureVisibleTab(null, {
        format: "jpeg",
        quality: 100
    }, function (dataUrl) {
        window.open(dataUrl);
    });
}
screenshot();
