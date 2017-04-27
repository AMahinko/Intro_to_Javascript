var ghost = "Blinky";
var color;

function checkColor(){
switch (ghost) {

  case 'Inky':
    color = "Cyan"
    break;
  case 'Blinky':
    color = 'Red';
    break;
  case 'Pinky':
    color = 'Pink';
    break;
  case 'Clyde':
    color = 'Orange';
    break ;
}
}

checkColor();

console.log(ghost + " is the color " + color);

ghost = "Inky";

checkColor();

console.log(ghost + " is the color " + color);
