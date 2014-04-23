(function(){

  'use strict';

  $(document).ready(init);

  var time = 0;
  var counter;


  function init(){
  $('#start').click(startClock);
  $('#stop').click(stopClock);
}

  function startClock(){
    clearInterval(counter);
    counter = setInterval(timer, 1000);
  }

  function stopClock(){
    clearInterval(counter);
  }

  function timer(){
    time++;
    $('#timer').text(time);
  }


})();
