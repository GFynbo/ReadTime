var tab_title = '';
function display_h1 (results){
  h1=results;
  document.querySelector("#id1").innerHTML = "<h1 style='color: darkblue;'>ReadTime:</h1> <h3>Article: <em>" + tab_title + "</em></h3><h2>" + h1 + "</h2>";
}
chrome.tabs.query({active: true}, function(tabs) {
  var tab = tabs[0];
  tab_title = tab.title;
  chrome.tabs.executeScript(tab.id, {
    file: 'content.js'
  }, display_h1);
});
