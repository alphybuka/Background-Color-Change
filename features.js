const button = document.querySelector('button');
let div = document.getElementById("all");
alert("Welcome...");

div.style.backgroundColor = "violet";
button.addEventListener('click', changeColor)

function getRandomColor() {
  let letters = "0123456789ABCDEF";
  let colors = "#";
  for (let i = 0; i < 6; i++) {
    colors += letters[Math.floor(Math.random() * 16)];
  }
  return colors;
}
function changeColor() {
  div.style.backgroundColor = getRandomColor();
}
//setInterval(changeColor, 500);
