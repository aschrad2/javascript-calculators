// This is the business (or back-end) logic:

var add = function(number1, number2) {
  return number1 + number2;
};

var subtract = function(number1, number2) {
  return number1 - number2;
};

var multiply = function(number1, number2) {
  return number1 * number2;
};

var divide = function(number1, number2) {
  return number1 / number2;
};

// Everything below this line is the user interface (or front-end) logic:

$(document).ready(function() {
  $("form#add").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#add1").val());
    var number2 = parseInt($("#add2").val());
    var result = add(number1, number2);
    $("#output").text(result);
  });

// Uses a click handler to output the number 1 when the button 1 is clicked
  $("#one").click(function(event) {
    // debugger;
    event.preventDefault();
    response = "1";
    $("#numberCounter").text(response)
  });

  $("#two").click(function(event) {
    // debugger;
    event.preventDefault();
    response = "2";
    $("#numberCounter").text(response)
  });

  $("#three").click(function(event) {
    // debugger;
    event.preventDefault();
    response = "3";
    $("#numberCounter").text(response)
  });

  $("#four").click(function(event) {
    // debugger;
    event.preventDefault();
    response = "4";
    $("#numberCounter").text(response)
  });

  $("#five").click(function(event) {
    // debugger;
    event.preventDefault();
    response = "5";
    $("#numberCounter").text(response)
  });

  $("#six").click(function(event) {
    // debugger;
    event.preventDefault();
    response = "6";
    $("#numberCounter").text(response)
  });

  $("#seven").click(function(event) {
    // debugger;
    event.preventDefault();
    response = "7";
    $("#numberCounter").text(response)
  });

  $("#eight").click(function(event) {
    // debugger;
    event.preventDefault();
    response = "8";
    $("#numberCounter").text(response)
  });

  $("#nine").click(function(event) {
    // debugger;
    event.preventDefault();
    response = "9";
    $("#numberCounter").text(response)
  });

});
