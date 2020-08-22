chrome.storage.sync.get(['blacklist'], function(result){
    if(result.blacklist.includes(window.location.origin)){
        alert("Blacklisted Website! Bad!")
        alert("Your blacklisted websites are: " + result.blacklist)
    }
})

chrome.runtime.onMessage.addListener(function(request) {
    chrome.storage.sync.get(['blacklist'], function(result){
        const newList = result.blacklist
        newList.push(window.location.origin)
        chrome.storage.sync.set({'blacklist': newList}, function(){
            alert(window.location.origin + " added to blacklist.")
            alert("Blacklist is now " + newList.join(", "))
        })
    })
})