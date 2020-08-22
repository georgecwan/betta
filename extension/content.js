chrome.storage.sync.get(['blacklist'], function(result){
    if(result.blacklist.includes(window.location.origin)){
        alert("Blacklisted Website! Bad!")
        alert("Your blacklisted websites are:\n" + result.blacklist.join("\n"))
    }
})

chrome.runtime.onMessage.addListener(function(request) {
    if(request.message == "updateURL") {
        chrome.storage.sync.get(['blacklist'], function (result) {
            const newList = result.blacklist
            let webPage = window.location.origin
            if (!newList.includes(webPage)) {
                newList.push(webPage)
                chrome.storage.sync.set({'blacklist': newList}, function () {
                    alert(webPage + " added to blacklist.")
                    alert("Blacklist:\n" + newList.join("\n"))
                })
            } else {
                alert("Already in blacklist.")
            }
        })
    }
    else if(request.message == "showBlacklist"){
        chrome.storage.sync.get(['blacklist'], function(result){
            alert(result.blacklist.join("\n"))
        })
    }
    else if(request.message == "clearBlacklist"){
        chrome.storage.sync.get(['blacklist'], function(result){
            const list = [];
            chrome.storage.sync.set({'blacklist': list})
            var snackbar = document.getElementById('snackbarbetta')
            snackbar.className = 'show'
            setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000)
        })
    }
})