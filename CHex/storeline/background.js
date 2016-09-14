//user to be logged in to site manually everytime for this plugin to work
//ajax request to /i/notifications
//grab the data
//filter out all the data
//display a rich noticiation if there's any update/notification in an account 

var messages = [];
var ids = [];
var latestID;

$(function() {
  setInterval(engine, 2000);
});

function engine() {
  var newTweets = [];
  $.get("https://twitter.com/i/notifications", function(data) {
    var htmlData = data;
    $data = $(htmlData).find('#stream-items-id').eq(0);
    $data.find('.activity-truncated-tweet').remove();
    $data.find('.activity-supplement').remove();
    for(i = 0; i < $data.find('li.stream-item').length; i++) {
      ids[i] = $data.find('li.stream-item').eq(i).attr('data-item-id');
      messages[i] = ($($data).find('li.stream-item').eq(i).find('div.stream-item-activity-line').text()).replace(/\n/g, '').trim();
    }
    if (latestID == ids[0]) {
      //no update
    } else if(latestID === undefined ) {
      //first run browser session
      var firstRun = {
        type: 'basic',
        title: 'Tweet Notifier',
        message: 'Whatever you did',
        iconUrl: 'icon.png'
      };
      chrome.notifications.create(firstRun);
      latestID = ids[0];
    } else if(latestID != ids[0]) { //there is some new activity on user's account
      for(j = 0; j < ids.length; j++) { //finding all the new notifications happened for user in interval time
        if(latestID == ids[j]) {
          break;
        }
        else {
          if(messages[j] != "") {
            newTweets[j] = messages[j];
          }
        }
      }
      latestID = ids[0];
    }
    if(newTweets.length == 0) {

    } else {
      for(i = 0; i < newTweets.length; i++) {
        var myTweet = {
          type: 'basic',
          title: 'New Notification',
          message: newTweets[i],
          contextMessage: "Twitter Notifier",
          buttons:[{
            title: "Open Link"
          }],
          iconUrl: 'icon.png'
        };
        chrome.notifications.onButtonClicked.addlistener(function() {
          window.open("https://twitter.com/i/notifications")
        });

        chrome.notifications.create(myTweet);
      }
    }
    //console.log(latestID);
    //console.log(newTweets);
    //console.log(ids);
    //console.log(messages);
  }
)}
