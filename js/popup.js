$(function () {
    $("#btn-button").click(function () {
        const table = document.getElementById('group');
        const range = document.createRange();
        // 设定range包含的节点对象 
        range.selectNode(table);
        // 窗口的selection对象，表示用户选择的文本
        const selection = window.getSelection();
        // 将已经包含的已选择的对象清除掉
        if (selection.rangeCount > 0) selection.removeAllRanges();
        // 将要复制的区域的range对象添加到selection对象中
        selection.addRange(range);
        // 执行copy命令，copy用户选择的文本
        document.execCommand('copy');
    
    });
});


function  getMagentReady(magents){
    console.log(magents);
};

$(document).ready(function () { 
    
     let f = window.getMagentReady;
    chrome.runtime.sendMessage({
        type: 'copy',
    },function(response) {
        if(response == null)return;
        let string = "";
        let pasteText = "";
        response.forEach(function(item) {
            pasteText += item + "\n";
           string +=  "<li class=\"list-group-item small\">"+item+"</li>";
        })
        $("#group").append(string);
      }
      );
});
