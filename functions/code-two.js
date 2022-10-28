/*function getShortCourseName(){
   var shortName = "Learning Javascript";
   return shortName;
}

var longNameFunc = function getLongCourseName(){
   var longName = "Learning Javascript Programming";
   return longName;
}

console.log(getShortCourseName());
//console.log(getLongCourseName());
console.log(longNameFunc());
*/

// Limit 3 shoes per order
/*
function processOrder(quantity, successFunc, errorFunc){
   if (quantity <+3){
      completeOrder();
      successFunc();
   }
   else {
      errorFunc();
   }
}

var successFunction = function success(){
   console.log("success, your order has processed!");
}

var errorFunction = function error(){
   console.log("error, your order quantity is not valid");
}

processOrder(2, successFunction, errorFunction);
processOrder(4, successFunction, errorFunction);

function completeOrder(){
   console.log("completing your order");
}
*/

courseOne = "JavaScript Programming";
var courseTwo = "HTML in a Weekend";

function courseListOne(){
   var courseThree = "CSS Made Easy";
   courseFour = "Python Coding";

   console.log(courseOne);
   console.log(courseTwo);
   console.log(courseThree);
   console.log(courseFour);
}

function courseListTwo(){
   var courseFive = "Expert HTML";

   console.log(courseOne);
   console.log(courseTwo);
   console.log(courseThree);
   console.log(courseFour);
   console.log(courseFive);
}


courseListOne();
courseListTwo();