# JSTipCalc
Tip Calculator for TCG

Did my own research to figure out how to use a function in order to store some data for use in the calculator.

Defined function calculateTip to be used when the submit button is pressed.
Used document.getElementById() to retrieve the inputs made by the user in the preTipAmount and tipPercentage boxes, 
used parseFloat() to convert the values entered into numbers for calculation.
The finalAmount is calculated using basic maths, namely the input for preTipAmount multiplied by the tipPercentage, divided by 100, to give us the finalAmount.
Gave the <p> in my HTML an id of 'result'.
Used this in my JS to use getElementById("result").innerHTML so that the final result could be shown in the HTML as expected.
Concatenated the string 'Final Amount: £' with the finalAmount to show the user what the finalAmount calculated was. 

Also added some CSS to the calculator to make it look a little bit more ✨jazzy✨!
