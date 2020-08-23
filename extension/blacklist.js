function showBlacklist() {
    chrome.storage.sync.get(['blacklist'], function(result){
        if (result.blacklist.length > 0) {
            for (var link in result.blacklist) {
                document.getElementById('sitelist').innerHTML += '<div class="link">'
                    + '<button class="trash" style="background-color:transparent; border: transparent; outline: transparent; margin:0;">' +
                    '<i class="material-icons w3-large">delete</i></button>' +result.blacklist[link] + '</div>';
            }
        }
        else {
            document.getElementById('sitelist').innerHTML = "You have not blacklisted any website."
        }
    })
}

window.onload = function() {showBlacklist()};
