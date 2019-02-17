// This is the business (or back-end) logic:

var calculatorDisplay = $('#input');

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
  var calculatorDisplay = $('#input');

  $("form#add").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#add1").val());
    var number2 = parseInt($("#add2").val());
    var result = add(number1, number2);
    $("#output").text(result);
  });

// We're attaching parameters to the html elements  and then we're grabbing them using the jQuery. We're targeting this instance of the clicked
// and we're grabbing the value associated with that very click. Data('calc') in jQuery correlates to data-calc="1".
// Uses a click handler to output the number 1 when the button 1 is clicked
// debugger;
  $(".calcbutton").click(function(event) {
    var clickedNumber = $(this).text();

    var displayNumber = calculatorDisplay.val() + clickedNumber;
    console.log(displayNumber);
    calculatorDisplay.val(displayNumber);
  });




// Next implementation is getting the backend functionality of the calculator to actually work. To do this, I need to save
// save each number entered as a string then concatenate it. Keep concenating, until an operator function is clicked.
// At that



});
