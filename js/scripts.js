//Business Logic
var inputNumArr = [];

function beepBooped(number){
  for (var i=number; i=0; i--){
    inputNumArr.push(i);
      if (number.includes(0)){
        while ((!number.includes(1))||(!number%3 ==0)){
        number="Beep";
        }
      } else if (number.includes(1)){
        while (!number%3 ==0){
        number="Boop";
        }
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

    //checks if the input is a number
    var inputNum = function (){
      input = parseInt($("input#inputNum").val());
      if (typeOf(input) == "number" && input>0){
        input+=input;
      } else {
        alert("Please input a number. Any non-numeric values are considered invalid inputs.")
        reset();
      };
    };


    var userResult = beepBooped(inputNum);

    $("#" + userResult).show();
  });
});
