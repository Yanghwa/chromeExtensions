chrome.browserAction.onClicked.addListener(function() {
  var information = "12333";
   chrome.tabs.executeScript(null, {
     code: 'var information = ' +information+";"   
   }, function() {
     chrome.tabs.executeScript(null, {file: 'script.js'});
   });
  //chrome.tabs.create({url: chrome.extension.getURL('options.html')}, callback); //chrome-extension.html something
  // chrome.tabs.executeScript(null, {
  //   //code: "document.body.style.background = 'red';"
   
  //   file: 'script.js'

  // }); //tabID and option
  // function callback(data) {
  //   console.log(data.url);
  // }
});