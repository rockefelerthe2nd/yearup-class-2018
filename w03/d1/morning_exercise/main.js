// Write a program that will `console.log`
//the numbers from 1 to 100. But for multiples of three `console.log` “Fizz”
//instead of the number and for the multiples of five `console.log` “Buzz”.
// For numbers which are multiples of both three and five `console.log` “FizzBuzz”.

//function to create a loop print buzz for multiple of 5 and Fizz for multiple of 3.

for(var i=1; i<101; i++){
  if(i%3==0){
    console.log("Fizz");
  }else if(i%5==0){
    console.log("Buzz");
  }
}
