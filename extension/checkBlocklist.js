window.onload = function() {allowOrBan()};
function allowOrBan() {
    chrome.storage.sync.get(['blacklist'], function(result){
        let bannedurl = result.blacklist.includes(window.location.origin);
        if(bannedurl){
            alert("Blocklisted Website! Bad!");
            alert("Your blocklisted websites are:\n" + result.blacklist.join("\n"));
            chrome.runtime.sendMessage({message: "blocklisted"});
        }
        else{
            chrome.runtime.sendMessage({message: "fine"});
        }
    })
}

