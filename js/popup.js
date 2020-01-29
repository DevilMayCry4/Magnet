
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
      if (request.code == "getUrl")
         console.log(request.data);
    });