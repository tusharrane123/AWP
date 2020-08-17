function validate() {
    const x =document.getElementById('pass').value;
    const y =document.getElementById('cnfmpass').value;

    if(x==y)
    {
        alert("Confirm Submission");
    }
    else{
        alert("invalid");
    }
    const z=document.querySelector('#id1').value=" ";
}