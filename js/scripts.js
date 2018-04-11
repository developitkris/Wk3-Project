//Business Logic
function reset(number){
  number== null;
}

var transformed = [];
function beepBooped(number){
  for (var i=number; i>=0; i--){
    var count = number;
    i.toString.split().push
    transformed.push(i) + count;
    count--;
      if (number%3 == 0){
        number = "I'm sorry, Dave. I'm afraid I can't do that.";
      } else if (number.includes(1)){
        number="Boop";
      } else if (number.includes(0)){
        number="Beep";
      } else {
        return number;
      }
    return transformed.reverse();
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
      };
    };


    var userResult = beepBooped(inputNum);
    //$("#result").show();
    $("#result").append(userResult);
    $("#" + userResult).show();

  });
});
  $("#reset").click(function(){
    reset();
  });
