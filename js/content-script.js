
$(function(){
    let content = window.document.all[0].outerHTML;
    var patt=new RegExp("magnet\:.xt\=urn\:btih\:[a-zA-Z0-9]{40}",'g');
    const found = content.match(patt);
    if(found != null){
        console.log("send data");
        chrome.runtime.sendMessage({
            type: 'sendURL',
            data: found
        });
    }
});
