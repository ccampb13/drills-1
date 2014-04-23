(function(){

  'use strict';

  $(document).ready(init);

  function init(){
  $('#switch').click(flip);
}

  function flip(){
    $(this).toggleClass('green');
    
  }




})();
