// --declare a function

//function without parameters
function myFunction(){ //takes 0 or more parameters
    console.log("hello world");
}
//myFunction() //call the function

// function with parametres
function testFunction(param1,param2){
    console.log(param1,param2);
}
//testFunction("Hi","World") // call the function




// Return a Value from a Function with Return
function plusThree(num){
    let a= 5;
    return num+3
}
let result = plusThree(3) //6


//scope
//Global scope __ around the application
//local scope __ functions
//exemple
let sum = 0;
function addSum(num) {
  sum = sum + num;
  return sum //without the return, function will return undefind
}
//console.log(sum);
//console.log(addSum(100));



//queue
function nextInLine(arr,item){
    arr.push(item)
    item =  arr.shift()
    return item
} 
const testArr = [1, 2, 3, 4, 5];
//console.log(nextInLine(testArr,6));
//console.log(testArr);

