var rest_list = [["Toro Toro", "$$", "https://www.eattorotoro.com/", "Latin/Hispanic"],
["Mi Cuba Cafe", "$", "http://micubacafe.com/", "Latin/Hispanic"],
["Nazca Mochica Restaurant", "$$", "https://www.nazcamochica.com/", "Latin/Hispanic"],
["El Centro D.F.", "$$", "https://www.eatelcentro.com/", "Latin/Hispanic"],
["Rosa Mexicano", "$$", "https://rosamexicano.com/", "Latin/Hispanic"],
["Del Campo", "$$$", "http://www.delcampodc.com/", "Latin/Hispanic"],
["Chipotle","$", "https://www.chipotle.com/", "Latin/Hispanic"],
["Uncle Juilo's","$", "https://www.unclejulios.com/", "Latin/Hispanic"],
["District Taco", "$", "https://www.districttaco.com/", "Latin/Hispanic"],
["Fogo de Chao", "$$$", "https://fogodechao.com/", "Latin/Hispanic"],
["Claudia's", "$$$", "http://www.claudiassteakhouse.com/", "Latin/Hispanic"],
["Perry’s Sushi", "$$","https://www.perrysam.com", "Asian"],
["Sushi Taro", "$$$", "https://sushitaro.com", "Asian"],
["Kaz Sushi Bistro", "$$", "http://www.kazsushi.com/", "Asian"],
["Sushi Gakyu", "$$$", "https://www.gakyudc.com/", "Asian"],
["Raku", "$$","http://www.rakuasiandining.com/cathedral-heights/", "Asian"],
["Buredo", "$",  "https://eatburedo.com/", "Asian"],
["Yosaku", "$$", "https://www.yosakusushi.com/", "Asian"],
[ "Bluefin Sushi", "$", "https://www.bluefingeorgetown.com", "Asian"],
["Donburi", "$", "http://www.donburidc.com/", "Asian"],
["Yobi", "$", "https://www.yobifresh.com/", "Asian"],
["Obelisk" , "$$$", "http://obeliskdc.com/",  "Italian"],
["Al Tiramisu", "$$$", "https://www.altiramisu.com/", "Italian"],
["Urbana", "$$", "http://www.urbanadc.com/en-us/index.html", "Italian"],
["Red White and Basil", "$", "http://www.redwhiteandbasil.com/", "Italian"],
["Sbarro", "$",  "https://sbarro.com/", "Italian"],
["Le chat noir", "$$$", "http://www.lechatnoirrestaurant.com/", "French"],
["Le Pain Quotidien", "$$", "http://www.lepainquotidien.com/","French"],
["Le diplomate","$$$", "https://lediplomatedc.com/","French"],
["Central Michel Richard", "$$$", "http://www.centralmichelrichard.com/", "French"],
["Cafe Bonaparte", "$$", "https://www.cafebonaparte.com/", "French"],
["Le de Sales", "$$", "https://www.ledesales.com/", "French"],
["Et Voila!", "$$", "http://etvoiladc.com/", "French"],
["Founding Farmers DC", "$$", "https://www.wearefoundingfarmers.com/menus/", "American"],
["Blue Duck Tavern", "$$$", "https://www.hyatt.com/corporate/restaurants/blue-duck-tavern/en/blue-duck-tavern-home.html", "American" ],
["Firefly", "$$", "http://www.firefly-dc.com/en-us/index.html", "American"],
["Daily Grill", "$$", "http://www.dailygrill.com/locations/daily-grill-washington-district-of-columbia/", "American"],
["Blackfinn Ameripub", "$$",  "https://blackfinnameripub.com/washingtondc/", "American"],
["Old Ebbitt Grill", "$$", "https://www.ebbitt.com/", "American"],
["Corner Bakery Cafe", "$",  "https://www.cornerbakerycafe.com/", "American"]];

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

function userInput(price, food) {
  var i;
  rest_list = shuffle(rest_list);
  for (i = 0; i < rest_list.length; i++) {
    if (price == rest_list[i][1]) {
      if (food == rest_list[i][3]){
        document.getElementById('restaurant').innerHTML = rest_list[i][0] + " " + rest_list[i][2];
        break;
      }
    }
}
  var info = [name, price, web, food];
  rest_list.push(info);
  alert("Restaurant added!");
  document.getElementById('test').innerHTML=rest_list.toString();
}
