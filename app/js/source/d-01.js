(function(){

  'use strict';

  $(document).ready(init);

  function init(){
  $('button').click(add);
}

  function add(){

    var x =$('#number1').val() *1;
    var y =$('#number2').val() *1;
    var sum = x + y;
    $('#answer').text(sum);
  }




})();
