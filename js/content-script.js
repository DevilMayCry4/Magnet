chrome.extension.onMessage.addListener(
    function (request, sender, sendResponse) {
        if (request.action === "copy") {
    //收到copy信息，开始获取当前页面id为sb_form_q的值
            var ctrl = $("#sb_form_q");
            if (ctrl.length > 0) {
            // 如果获取的值不为空则返回数据到popup.js的回调函数
                if (sendResponse) sendResponse(ctrl.val());
            } else {
                alert("No data");
            }
        }

    }
)


chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
    // If the received message has the expected format...
    if (msg.text === 'report_back') {
        // Call the specified callback, passing
        // the web-page's DOM content as argument
        console.log(document.all[0].outerHTML);
        sendResponse(document.all[0].outerHTML);
    }
});

$(function(){
    let content = window.document.all[0].outerHTML;
    var patt=new RegExp("magnet\:.xt\=urn\:btih\:[a-zA-Z0-9]{40}",'g');
    const found = content.match(patt);
    if(found != null){
        console.log('send data');
        chrome.runtime.sendMessage({code:'getUrl',data: found}, function(response) {
            
          });
    }
});