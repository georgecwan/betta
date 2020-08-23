const defaultHealth = 100;
chrome.storage.sync.get({fishHealth: defaultHealth}, function(result){
    let newWidth = String(result.fishHealth) + '%'
    let healthBar = document.getElementById('fishHealth')
    healthBar.style.width = newWidth
    healthBar.innerHTML = newWidth
    chrome.storage.sync.set({fishHealth: result.fishHealth})
})

document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('.ban-allow .ban').addEventListener('click', onclick, false);
  function onclick() {
      chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
            chrome.tabs.sendMessage(tabs[0].id, {message: "updateURL"});
      })
  }
}, false)

document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('.ban-allow .allow').addEventListener('click', onclick, false);
  function onclick() {
      chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
            chrome.tabs.sendMessage(tabs[0].id, {message: "deleteURL"});
      })
  }
}, false)


document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('.showBlacklist').addEventListener('click', onclick, false)
    function onclick () {
        window.location.href="blacklist.html";
    }
}, false)


document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('.reset').addEventListener('click', onclick, false)
    function onclick () {
        chrome.storage.sync.get(['blacklist'], function(result){
            const list = [];
            chrome.storage.sync.set({'blacklist': list});
        })
        var x = document.getElementById("snackbar");
        x.className = "show";
        setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
    }
}, false)

document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('.website').addEventListener('click', onclick, false);
    function onclick () {
        var newURL = "http://127.0.0.1:5000/";
        chrome.tabs.create({ url: newURL });
    }
}, false)
