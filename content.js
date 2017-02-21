function calculate() {
  var paragraphs = document.getElementsByTagName("p");
  var headers1 = document.getElementsByTagName("h1");
  var headers2 = document.getElementsByTagName("h2");
  var headers3 = document.getElementsByTagName("h3");

  var ps = "";
  for(var i = 0; i < paragraphs.length; i++) {
     ps += (paragraphs[i].innerHTML);
  }
  for(var i = 0; i < headers1.length; i++) {
     ps += (headers1[i].innerHTML);
  }
  for(var i = 0; i < headers2.length; i++) {
     ps += (headers2[i].innerHTML);
  }
  for(var i = 0; i < headers3.length; i++) {
     ps += (headers3[i].innerHTML);
  }

  //console.log(ps);
  var arrayOfStrings = ps.split(' ');
  var timeWords = arrayOfStrings.length;

  var images = document.getElementsByTagName("img");
  for(var i = 0; i < images.length; i++) {
     timeWords += 10;
  }

  var timeToReadMins = Math.floor(timeWords / 180);
  var timeToReadSecs = Math.ceil(((timeWords % 180) / 180) * 60);
  var timeTotal = "<p>" + timeToReadMins + " minutes " + timeToReadSecs + " seconds.</p><p>" + timeWords + " words.</p>";

  console.log(timeTotal);
  return timeTotal;
};
calculate();
