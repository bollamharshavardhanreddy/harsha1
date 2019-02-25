function multiplication(){

        
    let a = document.getElementById("num1").value;
    let b = document.getElementById("num2").value;
    
    let mul = multiply(a,b);
    alert("Multiplication of number 1 and number 2 gives "+mul);
}

function multiply(x,y) {
    return parseInt(x)*parseInt(y);
}
