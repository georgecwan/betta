chrome.storage.sync.get(['blacklist'], function(result){
    if(result.blacklist.includes(window.location.origin)){
        alert("Blacklisted Website! Bad!")
        alert("Your blacklisted websites are:\n" + result.blacklist.join("\n"))
    }
})

chrome.runtime.onMessage.addListener(function(request) {
    chrome.storage.sync.get(['blacklist'], function(result){
        const newList = result.blacklist
        let webPage = window.location.origin
        if (!newList.includes(webPage)) {
            newList.push(webPage)
            chrome.storage.sync.set({'blacklist': newList}, function () {
                alert(webPage + " added to blacklist.")
                alert("Blacklist:\n" + newList.join("\n"))
            })
        }
        else {
            alert("Already in blacklist.")
        }
    })
})