//Business Logic
var numArray= [];

function beepBooped(number){
  for (var i=number, i=0; i--){

    if (number.includes(0)){
      number="Beep";
    } else if (number.includes(1)){
      number="Boop";
    } else if (number%3 == 0){
      number="I'm sorry, Dave. I'm afraid I can't do that.";
    } else {
      count--;
    }
  }
}




//User Logic
$(document).ready(function(){
  $("form#beepBoop").submit(function(event){
    event.preventDefault();

    var userNum = parseInt($("input#inputNum").val());
    var userResult = beepBooped(userNum);

    $("#result#" + userResult).show();
  })
})
