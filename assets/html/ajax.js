$(document).ready(function(){
    $("button").click(function(){
        var a = $('#num1').val();
        var b = $('#num2').val();
let mul = findPerimeter(a,b);
alert("Multiplication of number 1 and number 2 gives "+mul);

    });
  });


function multiply(x,y) {
    return parseInt(x)*parseInt(y);
}