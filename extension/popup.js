// window.onload = function () {
//     document.getElementByID('addURL').onclick = function(){
//         chrome.storage.sync.set({'newURL': window.location.origin}, function(){
//         window.alert('URL added: ' + window.location.origin);
//         console.log('URL added: ' + window.location.origin)
//         })
//     }
// }

document.addEventListener('DOMContentLoaded', function () {

  document.querySelector('.addURLbutton').addEventListener('click', onclick, false)

  function onclick () {
      chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
            chrome.tabs.sendMessage(tabs[0].id, {message: "updateURL"})
      })
  }
}, false)


document.addEventListener('DOMContentLoaded', function () {

    document.querySelector('.showBlacklist').addEventListener('click', onclick, false)

    function onclick () {
        chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
            chrome.tabs.sendMessage(tabs[0].id, {message: "showBlacklist"})
        })
    }
}, false)


document.addEventListener('DOMContentLoaded', function () {

    document.querySelector('.reset').addEventListener('click', onclick, false)

    function onclick () {
        chrome.storage.sync.get(['blacklist'], function(result){
            const list = [];
            chrome.storage.sync.set({'blacklist': list})
        })
        var x = document.getElementById("snackbar")
        x.className = "show"
        setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000)
    }
}, false)

document.addEventListener('DOMContentLoaded', function () {

    document.querySelector('.website').addEventListener('click', onclick, false)

    function onclick () {
        var newURL = "http://127.0.0.1:5000/";
        chrome.tabs.create({ url: newURL });
    }
}, false)
