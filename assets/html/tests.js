//function multiplication(){

        
   // let a = document.getElementById("num1").value;
    //let b = document.getElementById("num2").value;
    
   // let mul = multiply(a,b);
    //alert("Multiplication of number 1 and number 2 gives "+mul);
//}

//function multiply(x,y) {
  //  return parseInt(x)*parseInt(y);
//}

//Qunit.test("mul", function (assert) {
  //  assert.equal();
    //assert.equal();
    //assert.equal();
    //assert.equal();
    //assert.equal();
    
//})
// This file tests our application code - open this file in a browser to see the test results. 

// It uses QUnit, a unit testing library for JavaScript. 

// Unit testing is a common, professional practice. 

// It helps us verify our code is correct in all cases.

// To complete this assignment, go to the end of this file, and uncomment the last 5 tests. 

// Refresh.  You will see several failing tests. 

// Modify the code in your appplication (W03.js) to get these tests to pass. 

// References: 
// https://qunitjs.com/
// https://www.sitepoint.com/getting-started-qunit/
// http://jsbin.com/tusuvixi/1/edit?html,js,output

QUnit.test("Here's a test that should always pass", function (assert) {
    assert.ok(1 == "1", "1=1 success!");
});

QUnit.test('Testing our pointCal function with four sets of inputs', function (assert) {
    assert.strictEqual(multiply(2,2), 4, "Positive");
    assert.strictEqual(multiply(4,2), 8, "Poitive");
    assert.strictEqual(multiply(1,-1), -1, "Negative");
    assert.strictEqual(multiply(0,1), 0, "Zero");
    assert.strictEqual(multiply(0,0), 0, "Zero");
});