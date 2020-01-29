// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';
var urlRegex = /^https?:\/\/(?:[^./?#]+\.)?javbus\.com/;


chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    chrome.declarativeContent.onPageChanged.addRules([{
      conditions: [new chrome.declarativeContent.PageStateMatcher({
        pageUrl: {urlMatches: '(javbus)\.com' },
      })
      ],
          actions: [new chrome.declarativeContent.ShowPageAction()]
    }]);
  });


  chrome.runtime.onMessage.addListener(function(message,sender,senderResponse) {
      console.log("get message");
    if (message && message.type == 'sendURL') {
       window.data = message.data;
    }else if (message && message.type == 'copy') {
        senderResponse(window.data);
     }

});