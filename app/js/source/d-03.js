(function(){

  'use strict';

  $(document).ready(init);

  function init(){
  $('button').click(cuatro);
}

  function cuatro(){
    var nums = $('#numberBox').val().split(',');
    for(var i = 0; i < nums.length; i++){
      var number = nums[i];
      var fourPower = fourth(number);
      var newDiv = $('<div></div>');
      $(newDiv).addClass('.finally').text(fourPower);
      $('#output').append(newDiv);
    }
  }
  function fourth(x){
    return Math.pow(x,4);
  }
//   function div(x){
//     return '<div>' + x + '</div>';
// }
})();
