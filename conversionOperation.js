//uncomment all console.log() 

let score = "33"

//console.log(typeof score);
//console.log(typeof(score));   // both print the type of score


//let valueInNumber = Number(score)  //This converts score in number
//console.log(typeof valueInNumber);

let score2 = "34msd"
//console.log(typeof score2);
let valueInScore2= Number(score2)
//console.log(typeof valueInScore2);

//console.log(valueInScore2);   //This converts score2 in number n=but output will be NaN
/* for null the conversion will give output 0
for undefined it will give NaN
for boolean it gives 1 or 2
*/
/* "33"=>33
"33absn"=> NaN
true =>1; false=>0
*/

let isLoggedIn ="1"
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);
// 1=> true ; 0=> false
// ""=> false
//"abhi"=> true

/*similarly 
for string use string */ 
