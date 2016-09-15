//chrome.runtime.sendMessage(document.getElementsByTagName('title')[0].innerText);
var url = chrome.extension.getURL('toolbar.html');
var height = '35px';
var iframe = "<iframe src='"+url+"' id='myOwnCustomFirstToolbarkkkk' style='height:"+height+"'></iframe>";

$('html').append(iframe);
$('body').css({
  '-webkit-transform': 'translateY('+height+')'
});
