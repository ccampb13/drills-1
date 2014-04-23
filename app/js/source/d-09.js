(function(){

  'use strict';

  $(document).ready(init);

  function init(){
  $('div').click(flip);
}

  function flip(){
    var red = getColor(256);
    var green = getColor(256);
    var blue = getColor(256);
    var alpha = Math.random();
    $('div').css('background-color', 'rgba(' + red + ', ' + green + ', ' + blue + ', ' + alpha + ')');

  }

  function getColor(x){
      return Math.floor(Math.random() * x);
  }


})();
