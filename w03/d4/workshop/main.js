//This comes from data.js
var gifs = window.data.data;

var colors = ["rgba(204, 0, 0, 0.8)", "BLUE", "GREEN", "YELLOW", "ORANGE"];

function sayMeow(){
  var randomize = gifs[Math.floor(Math.random()*gifs.length)];
  var randCol = colors[Math.floor(Math.random()*colors.length)];
  document.getElementById("catsuya").src = randomize.images.preview_gif.url;
  document.getElementById("here_lies_cat").style.backgroundColor = randCol;
}
