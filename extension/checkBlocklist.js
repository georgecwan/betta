chrome.storage.sync.get(['blacklist'], function(result){
    var toggleButton = document.querySelector('.addURLbutton')
    if(result.blacklist.includes(window.location.origin)){
        alert("Blocklisted Website! Bad!")
        alert("Your blocklisted websites are:\n" + result.blacklist.join("\n"))
        chrome.runtime.sendMessage({message: "blocklisted"})
    }
    else{
        chrome.runtime.sendMessage({message: "fine"})
    }
})