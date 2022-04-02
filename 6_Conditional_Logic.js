//!booleen
// like on/off switch
// accept true or false without quotes
// true not equal "true"
// 1 == true or 0 == false



//!conditional logic
function condition(condition)
{if(condition){
    return "true";
}
    return "false"
}
console.log(condition(false));



//!comparison (==) values

function equalityTest(myVal) {
    if (myVal == '10' && myVal == '10' ) {
      return "Equal";
    }
    return "Not Equal";
  }
// console.log(equalityTest(10)); 
// console.log(equalityTest(20)); 
// 1   ==  1  // true
// 1   ==  2  // false
// 1   == '1' // true
// "3" ==  3  // true



//!=== the value and type

// 3 ===  3  // true
// 3 === '3' // false



// type of a variable or value

// typeof 3 
// typeof var

// ! != inequality
// 1 !=  2    // true
// 1 != "1"   // false
// 1 != '1'   // false
// 1 != true  // false
// 0 != false // false


//! !== strict inquality
// 3 !==  3  // false
// 3 !== '3' // true
// 4 !==  3  // true


//! Greater Than Operator
// 5   >  3  // true
// 7   > '3' // true
// 2   >  3  // false
// '1' >  9  // false


//! Greater Than Or Equal To Operator
// 6   >=  6  // true
// 7   >= '3' // true
// 2   >=  3  // false
// '7' >=  9  // false


//! Less Than Operator
// 2   < 5 // true
// '3' < 7 // true
// 5   < 5 // false
// 3   < 2 // false
// '8' < 4 // false

//! Less Than Or Equal To Operator
// 4   <= 5 // true
// '7' <= 7 // true
// 5   <= 5 // true
// 3   <= 2 // false
// '8' <= 4 // false

//! Logical And Operator

function testFun(num){if (num > 5 && num < 10) {
  return "Yes";
}
return "No";}
console.log(testFun(6)) //Yes;
console.log(testFun(11)) // No;


//! Logical Or Operator

function testFun(num){if (num > 10 || num < 2) {
  return "Yes";
}
return "No";}
console.log(testFun(6)) //No;
console.log(testFun(11)) // Yes;


//! Else Statements
num = 20;
if (num > 10) {
   console.log("Bigger than 10");;
} else {
   console.log("10 or Less");
}

//!Else If Statements
//The function is executed from top to bottom so you will want to be careful of what statement comes first.
num = 10;
if (num > 10) {
   console.log("Bigger than 10");;
} else if (num === 10) {
   console.log("10");
} else {
  console.log("less than 10");
}





