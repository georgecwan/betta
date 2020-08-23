window.onload = function() {allowOrBan()};
function allowOrBan() {
    let toAdd = 0
    chrome.storage.sync.get(['blacklist'], function(result){
        let bannedurl = result.blacklist.includes(window.location.origin);
        if(bannedurl){
            alert("Blocklisted Website! Bad!");
            alert("Your blocklisted websites are:\n" + result.blacklist.join("\n"));
            chrome.runtime.sendMessage({message: "blocklisted"});
            toAdd = -20
        }
        else{
            chrome.runtime.sendMessage({message: "fine"});
            toAdd = 2
        }
        chrome.storage.sync.get(['fishHealth'], function(health){
            if(health.fishHealth >= 100 && toAdd > 0){
                newHealth = 100;
            }
            else if(health.fishHealth <= 20 && toAdd < 0){
                newHealth = 0;
            }
            else{
                newHealth = health.fishHealth + toAdd;
            }
            chrome.storage.sync.set({'fishHealth': newHealth}, function () {
                alert("New health: " + String(newHealth));
            })
        })
    })
}

