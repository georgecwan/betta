//experimental, doesn't work, it's supposed to switch the html of the button, don't worry about this
chrome.runtime.onMessage.addListener(function(request) {
    if (request.message == "blocklisted") {
        alert("blocklisted");
    }
    else if(request.message == "fine"){
        alert("fine");
    }
    alert("received");
})

document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('.ban').addEventListener('click', onclick, false);
  document.querySelector('.allow').addEventListener('click', onclick, true);
  function onclick() {
      chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
            chrome.tabs.sendMessage(tabs[0].id, {message: "updateURL"});
      })
      // let toggleButton = document.querySelector(".addURLbutton");
      // if (toggleButton.innerHTML == "Ban This URL") {
      //     toggleButton.innerHTML = "Allow This URL";
      // }
      // else {
      //     toggleButton.innerHTML = "Ban This URL";
      // }
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
