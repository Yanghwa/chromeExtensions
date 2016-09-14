var contextsList = ["selection", "link", "image", "page"];

for(i = 0; i < contextsList.length; i++) {
  var context = contextsList[i];
  var titleX = "Twitter connection: Share this " +context+ " on your twitter profile";
  chrome.contextMenus.create({ title: titleX, contexts: [context], onclick: myFunction, id: context});
}

 //selection, link, image, page

function myFunction(data, tab) {
  switch(data.menuItemId) {
    case 'selection':
      chrome.windows.create({url:"https://twitter.com/intent/tweet?text=" + encodeURIComponent(data.selectionText), type: "panel"});
      //chrome.tabs.create({url:"https://twitter.com/intent/tweet?text=" + encodeURIComponent(data.selectionText)});
      break;
    case 'link':
      chrome.windows.create({url:"https://twitter.com/intent/tweet?url=" + encodeURIComponent(data.linkUrl), type: "panel"});
      break;
    case 'image':
      chrome.windows.create({url:"https://twitter.com/intent/tweet?url=" + encodeURIComponent(data.srcUrl), type: "panel"});
      break;
    case 'page':
      chrome.windows.create({url:"https://twitter.com/intent/tweet?text=" + encodeURIComponent(tab.title) + "&url=" + (data.pageUrl), type: "panel"});
      break;
  }

}
/*
javascript:var d=document,f='http://www.facebook.com/share',l=d.location,e=encodeURIComponent,p='.php?src=bm&v=4&i=1274665734&u='
+e(l.href)+'&t='+e(d.title);1;try{if (!/^(.*\.)?facebook\.[^.]*$/.test(l.host))throw(0);share_internal_bookmarklet(p)}catch(z)
{a=function() {if (!window.open(f+'r'+p,'sharer','toolbar=0,status=0,resizable=1,width=626,height=436'))l.href=f+p};if (/Firefox/.test(navigator.userAgent))
setTimeout(a,0);else{a()}}void(0)
*/
