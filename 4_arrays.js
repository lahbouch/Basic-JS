//arrays (list in python)
const myArray = ["text",2]



// 2 demensional arrays
const personne = [["abdelhamid",22],["ayoub",18]]



//array indexing
var myArray1 = [1,2,3,4,5,6];
const one= myArray1[0];
myArray1[0] = 10;



//2 demonsionel array indexing
const arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [[10, 11, 12], 13, 14]
  ]; 
// console.log(arr[3][0][2]); //11



//push to array (append to array )
var myArray1 = [["John", 23], ["cat", 2]];
myArray1.push(["dog", 3],1,"abdo") //takes n args
// [ [ 'John', 23 ], [ 'cat', 2 ], [ 'dog', 3 ], 1, 'abdo' ]


//pop from end of array and return value
const threeArr = [1, 4, 6];
const removedValue = threeArr.pop();
// console.log(threeArr); [ 1, 4 ]
// console.log(removedValue); 6


//shift method removes the first element from array
const ourArray = ["Stimpson", "J", ["cat"]];
const removedFromOurArray = ourArray.shift();
// console.log(removedFromOurArray); Stimpson
// console.log(ourArray); [ 'J', [ 'cat' ] ]


// unshift add elements in front of the array.
const Arr = [["John", 23], ["dog", 3]];
Arr.shift(); //delete and return the first value
Arr.unshift(["Paul", 35]) //add an element to the first 
console.log(Arr);