// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';
var urlRegex = /^https?:\/\/(?:[^./?#]+\.)?javbus\.com/;

chrome.runtime.onMessage.addListener(
        
    function(request, sender, sendResponse) {
      if (request.code == "getUrl")
        {console.log(request.data);}
        console.log(request.code);
});

chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    chrome.declarativeContent.onPageChanged.addRules([{
      conditions: [new chrome.declarativeContent.PageStateMatcher({
        pageUrl: {urlMatches: '(javbus)\.com' },
      })
      ],
          actions: [new chrome.declarativeContent.ShowPageAction()]
    }]);
  });




function doStuffWithDom(domContent) {
    console.log('I received the following DOM content:\n' + domContent);
}


  chrome.browserAction.onClicked.addListener(function (tab) {
    // ...check the URL of the active tab against our pattern and...
    if (urlRegex.test(tab.url)) {
        // ...if it matches, send a message specifying a callback too
        chrome.tabs.sendMessage(tab.id, {text: 'report_back'}, doStuffWithDom);
    }
});