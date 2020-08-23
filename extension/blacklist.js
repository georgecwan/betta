function showBlacklist() {
    chrome.storage.sync.get(['blacklist'], function(result){
        if (result.blacklist.length > 0) {
            for (var link in result.blacklist) {
                document.getElementById('sitelist').innerHTML += '<div class="link">'
                    + '<i class="material-icons w3-large">delete</i>' +result.blacklist[link] + '</div>';
            }
        }
        else {
            document.getElementById('sitelist').innerHTML = "You have not blacklisted any website."
        }
    })
}

window.onload = function() {showBlacklist()};
