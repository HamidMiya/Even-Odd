console.log("Welcome to Learn JavaScript");

console.log("Even or Odd Program");

let a = prompt("Enter The number to check Even / Odd");
if(a%2==0){
    console.log("Even Number");}
    else{
        console.log("Odd Number");

    }




let persentage=prompt("Enter your Persentage");


if(persentage >= 80 && persentage <=100){
    console.log("A1 Grade")
}
else if(persentage >=101 || persentage <=0){
    console.log("Invalid Input");
}
else if(persentage >=70 && persentage <= 79){
    console.log("B Grade");
}
else if(persentage >=60 && persentage <= 69){
    console.log("C Grade");
}else if(persentage >=50 && persentage <= 59){
    console.log("D Grade");
}else{
        console.log("Fail")
}




// To print Table according to the user's wish if non so print Table of 5 ( it also asks to user the stating & Ending point )
let Table=prompt("Enter your Table ");
let stating=prompt("Enter your Starting point of Table ");
let ending=prompt("Enter your Ending point of Table ");

if(Table == ""){
    for(i=1; i<=10; i++){
        console.log("5" , "*" , i , "=" , i*5)
    }
}
else{
    for(i=stating; i<=ending; i++)
    console.log(Table , "*" , i , "=" , Table*i)
    console.log("Hamid Miya")
}






// here i have learnt all methods of java script 


"use strict";
/* esLint-disable */
/**
 * 
 * @param {array} arr 
 * @returns {string} a string
 */
function revertArr(arr){
    return arr.reverse().join("_")
}
console.log(revertArr(["I", "am", "Sam"]))

/**
 * 
 * @param {number} result 
 * @returns {string} - callback function 
 */
function myBad(result){
    console.log(`here is the ${result}`)
}
function add(a,b, add){
    let ad =a+b;
    add(ad)
}
console.log(add(2,3,myBad))

/**
 * 
 * @param {array} arr 
 * @returns {array} arr
 */
function spliceArry(arr){
    return arr.splice(1,0,3);
}
console.log(spliceArry([1,2,3,8,7]))

/**
 * 
 * @param {Array} arr 
 * @returns {Array} - sum of all the elements in the array
 */
function twoDArray(matrix){
    let sum;
    for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
       sum= matrix[i]+[j];   
    }
    }
    return sum;
}
// console.log(twoDArray([[1,3,5],[6,7,8]]))

let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]];
    for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
    console.log(matrix[i][j] + matrix[i][j]);
    }
    }
    console.log(matrix)


// To check the days remaining in birthday ...
let dob = prompt("Enter your Date of Birth (YYYY-MM-DD):");
let dobMoment = moment(dob, "YYYY-MM-DD");
let todaydate = moment();
let doy = moment(dob).year(todaydate.year());

if (doy.isBefore(todaydate)) {
    doy.add(1, 'year');
}

let diff = doy.diff(todaydate, 'days');
console.log("Days remaining for your birthday:", diff);







// Function to calculate the average of an array
function calculateAverage(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    let average = sum / arr.length;
    return average;
}

const numbers = [10, 20, 30, 40, 50];

const average = calculateAverage(numbers);
console.log("Average is:", average);



// // Function to calculate the average of an array / The same work as above one .

let a = prompt("Enter any Number like ARRAY Ex: 2,2,2");
let array = a.split(',').map(Number);  // Convert input string to an array of numbers

function Average(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {  // Declare loop index with 'let'
        sum += arr[i];  // Calculate the sum of the array elements
    }
    let average = sum / arr.length;  // Calculate the average
    return average;  // Return the average
}

const result = Average(array);  // Call the function with the array as an argument
console.log("The average is:", result);  // Print the result


