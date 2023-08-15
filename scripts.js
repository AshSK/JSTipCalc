function calculateTip() {
    var preTipAmount = parseFloat(document.getElementById("preTipAmount").value);
    var tipPercentage = parseFloat(document.getElementById("tipPercentage").value);
    var finalAmount = preTipAmount + (preTipAmount * tipPercentage / 100);
    document.getElementById("result").innerHTML = "Final Amount: £" + finalAmount;
  }