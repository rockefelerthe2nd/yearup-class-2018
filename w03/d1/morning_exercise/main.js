// Write a program that will `console.log` the numbers from 1 to 100. But for multiples of three `console.log` “Fizz” instead of the number and for the multiples of five `console.log` “Buzz”. For numbers which are multiples of both three and five `console.log` “FizzBuzz”.

// for(var i=1; i<101; i++){
//   if(i%5===0&&i%3===0){
//     console.log(i+":\tFizzBuzz");
//   }else if(i%5===0){
//     console.log(i+":\tBuzz");
//   }else if(i%3===0){
//     console.log(i+":\tFizz");
//   }
//   else{
//     console.log(i);
//   }
// }

//This function allows the div to change color on click of the button
var count = 0;
// yellow , pink, red, blue, gray
var color = ["#FFFF00", "#FFB6C1", "#ff0000", "#0000ff", "#808080"];


document.querySelector('.button_left').onclick = changeColorL;
document.querySelector('.button_right').onclick = changeColorR;


function changeColorL(){
    count--;
  if(count<0){
    count=4;
  }
      document.querySelector('.imageholder').style.backgroundColor = color[count];
      console.log("count:\t"+count);
}
function changeColorR(){
    count++;
  if(count>=color.length){
    count = 0;
  }
  document.querySelector('.imageholder').style.backgroundColor = color[count];
console.log("count:\t"+count);
}
