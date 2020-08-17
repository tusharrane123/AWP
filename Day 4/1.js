function calculate() {
    var x=Number (document.getElementById('Num1').value);
    var y=Number (document.getElementById('Num2').value);
    var z=0;

    if(document.getElementById("Add")) {
        z=x+y;

    }
    document.getElementById('Answer').value=z;

} 
