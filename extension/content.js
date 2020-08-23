chrome.runtime.onMessage.addListener(function(request) {
    if(request.message == "updateURL") {
        chrome.storage.sync.get(['blacklist'], function (result) {
            const newList = result.blacklist;
            let webPage = window.location.origin;
            if (!newList.includes(webPage)) {
                newList.push(webPage);
                chrome.storage.sync.set({'blacklist': newList}, function () {
                    alert(webPage + " added to blacklist.");
                })
            }

        })
    }
    else switch (request.message) {
        case "deleteURL":
            chrome.storage.sync.get(['blacklist'], function (result) {
                const newList = result.blacklist;
                let webPage = window.location.origin;
                for (var i = 0; i < newList.length; i++) {
                    if (newList[i] == webPage) {
                        newList.splice(i, 1);
                    }
                }
                chrome.storage.sync.set({'blacklist': newList}, function () {
                    alert(webPage + " removed from blacklist.");
                })
            })
            break;
    }
})