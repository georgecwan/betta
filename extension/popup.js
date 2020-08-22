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
      console.log("epic")
      chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
            chrome.tabs.sendMessage(tabs[0].id, {message: "hello"})
      })
  }
}, false)


document.addEventListener('DOMContentLoaded', function () {

    document.querySelector('.showBlacklist').addEventListener('click', onclick, false)

    function onclick () {
        chrome.storage.sync.get(['blacklist'], function(result){
            alert(result.blacklist)
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

    }
}, false)