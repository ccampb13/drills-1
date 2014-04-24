(function(){

  'use strict';

  $(document).ready(init);

  function init(){
  $('#go').click(main);

}

  function main(){
    getInput().split(',').map(cut).map(mathArray).map(div).forEach(append);
  }

  function getInput(){
    return $('#input').val();
  }

  function cut(x){
    return x.trim();
  }

  function mathArray(x){
    return (x % 2) ? square(x) : cube(x);
  }

  function square(x){
    return x*x;
  }

  function cube(x){
    return Math.pow(x,3);
  }

  function div(x){
    var cls = (x % 2) ? 'odd' : 'even';
    return '<div class="'+cls+'">'+x+'</div>';
  }

  function append(div){
    $('#storage').append(div);

  }

})();
