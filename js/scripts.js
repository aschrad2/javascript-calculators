// This is the business (or back-end) logic:
var number1;
var number2;
var operatorCalled;
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

  $("form#calculator-form").submit(function(event) {
    event.preventDefault();

    var displayNumber = calculatorDisplay.val();
    $("#output").text(displayNumber);
  });

  $(".operatorbutton").click(function(event) {
    // number1 = getElementById('input').value;
    document.getElementById('input').value = '';
  })


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

  // $(".operandbutton").click(function(event) {
  //   var clickedOperand = $(this).text();
  //   var displayedOperand = calculatorDisplay.val() + clickedOperand;
  //   console.log(displayedOperand);
  //   calculatorDisplay.val(displayNumber);
  // })

  $(".operatorbutton").click(function(event) {
    var clickedOperator = $(this).text();
    var displayOperator = calculatorDisplay.val() + clickedOperator;
    console.log(displayOperator);
    calculatorDisplay.val(displayOperator);
  })

  $("#clear").click(function(event) {
    document.getElementById("calculator-form").reset();
  })



// clear button

// when Calculate button is pressed, it runs the calculation and outputs the number

// Next implementation is getting the backend functionality of the calculator to actually work. To do this, I need to save
// save each number entered as a string then concatenate it. Keep concenating, until an operator function is clicked.
// At that



});
