/**
 * Converts a number a string.
 * @param {number} n
 * @return {string} the number as a string
 */

 function numberToString(num){

  var str = '';
  str+=num;
  return str;

 }

/**
 * Adds one to a given number.
 * @param {number} n
 * @return {number}
 */

function increase(num){

  return num+1;

}


/**
 * Subtracts one from a given number.
 * @param {number} n
 * @return {number}
 */

function decrease(num){

  return num-1;

}


/**
 * Adds two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the sum
 */

function add(num1,num2){

  return num1+num2;
}



/**
 * Subtracts the second number from the first.
 * @param {number} x
 * @param {number} y
 * @return {number} the difference
 */

function subtract(num1,num2){

  return num1-num2;
}


/**
 * Multiplies two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the product
 */

function multiply(num1,num2){

  return num1*num2;
}


/**
 * Divides the first number by the second.
 * @param {number} x
 * @param {number} y
 * @return {number} the quotient
 */

function divide(num1,num2){

  return num1/num2;
}


/**
 * Multiplies a number by itself.
 * @param {number} x, number to be squared
 * @return {number} squared
 */

function square(num){

  //if the number is not zero, return square
  if(num!==0){
    return num*num;
  }

  //if it is zero, return 1
  else{
    return 1;
  }
}



/**
 * Performs a mathematical operation on two numbers.
 * Also prints out the equation: (i.e.) "1 + 5 = 6" or "8 / 2 = 4".
 * @param {string} operation "add", "subtract", "multiply", or "divide"
 * @param {number} x
 * @param {number} y
 * @return {number} the result
 */

function calculate(str,num1,num2){

  var result=0;

  //find out what the operation is
  switch(str.toUpperCase()){

    case 'ADD':
      str='+';
      result = num1+num2;
      console.log(num1+' '+str+' '+num2+' = '+result);
      break;

    case 'SUBTRACT':
      str='-';
      result = num1-num2;
      console.log(num1+' '+str+' '+num2+' = '+result);
      break;

    case 'MULTIPLY':
      str='*';
      result = num1*num2;
      console.log(num1+' '+str+' '+num2+' = '+result);
      break;

    case 'DIVIDE':
      str='/';

      //if the second number is not zero, go ahead and divide
      if(num2!==0){
        result = num1/num2;
        console.log(num1+' '+str+' '+num2+' = '+result);
      }

      else{
        result = undefined;
      }

      break;

    default:

      console.log("Somethign went wrong, please try function again");


  }




  return result;
}



/**
 * Returns true if `a` is greater than `b`.
 * @param {number} a
 * @param {number} b
 * @return {boolean} `a` is larger than `b`
 */

function isGreaterThan(num1,num2){

  if(num1>num2){
    return  true;
  }

  else{
    return false;
  }

}



/**
 * Returns true if `a` is less than `b`.
 * @param {number} a
 * @param {number} b
 * @return {boolean} `a` is smaller than `b`
 */

function isLessThan(num1,num2){

  if(num1<num2){
    return  true;
  }

  else{
    return false;
  }

}


/**
 * Returns true if `a` and `b` are equal.
 * @param {number} a
 * @param {number} b
 * @return {boolean} the numbers are equal
 */

function areEqual(num1,num2){

  if(num1===num2){
    return  true;
  }

  else{
    return false;
  }

}

/**
 * Returns the smallest value of two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the smallest number
 */

function minimum(num1,num2){

  if(num1<num2){
    return  num1;
  }

  else{
    return num2;
  }

}


/**
 * Returns the largest value of two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the largest number
 */

function maximum(num1,num2){

  if(num1>num2){
    return  num1;
  }

  else{
    return num2;
  }

}


/**
 * Returns true if `n` is even.
 * @param {number} n
 * @return {boolean} the number is even
 */

function isEven(num){

  if((num%2)===0){
    return true;
  }

  else{
    return false;
  }


}


/**
 * Returns true if `n` is odd.
 * @param {number} n
 * @return {boolean} the number is odd
 */

function isOdd(num){

  if((num%2)!==0){
    return true;
  }

  else{
    return false;
  }


}



/**
 * Returns a letter grade.
 * "A": 90-100%
 * "B": 80-89%
 * "C": 70-79%
 * "D": 60-69%
 * "F": 0-59%
 * @param {number} score
 * @param {number} total maximum possible score
 * @return {string} the score represented as a letter grade
 */

function letterGrade(score,scorePossible){

  //get percentage score
  var percentScore = 100*(score/scorePossible);
  var grade = '';

  if((percentScore>=90)&&(percentScore<=100)){
    grade = 'A';
  }

  else if((percentScore>=80)&&(percentScore<90)){
    grade = 'B';
  }

  else if((percentScore>=70)&&(percentScore<80)){
    grade = 'C';
  }

  else if((percentScore>=60)&&(percentScore<70)){
    grade = 'D';
  }

  else{
    grade = 'F';
  }

  return grade;


}

/**
 * Checks if a `restaurant` object has are `views` field.
 * If it does, increase it by 1. If it does not,
 * set itsreviews` field to 1.
 * @param {object} restaurant represents a restaurant
 */

function incrementReviews(restaurant){

 // if(restaurant.hasOwnProperty('review')){
 
  if(restaurant.reviews){
    restaurant.reviews+=1;
  
  }
  else{
    restaurant.reviews = 1;

  }

  return restaurant;

}



/**
 * Joins two strings with a space.
 * @param {string} word1
 * @param {string} word2
 * @return {string} joined the words joined with a space
 */

/**
 * Returns a circle object with the properties `circumference` and `area`.
 * Use Math.PI for the value π.
 * (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/PI)
 * @param {number} radius
 * @return {object} circle
 */
