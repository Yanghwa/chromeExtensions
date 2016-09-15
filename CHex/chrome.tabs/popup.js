document.addEventListener('DOMContentLoaded', function() {
  var checkPageButton = document.getElementById('checkPage');
  checkPageButton.addEventListener('click', function() {
    var f = document.createElement('form');
    f.action = 'http://lavasoft.com';
    f.method = 'post';
    f.submit();
  });
  var checkPageButton2 = document.getElementById('checkPage2');
  checkPageButton2.addEventListener('click', function() {
    chrome.tabs.create({'url': 'http://lavasoft.com'}, function(tab) {
  // Tab opened.
    });
  });
});
