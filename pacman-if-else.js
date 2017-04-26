var powerPelleteaten = false;
var ghosts = 4;

while(true) {
  console.log("ghosts remaining: " + ghosts);

  if (powerPelleteaten === false){
    console.log("Pacman eats a power pellet");
    powerPelleteaten = true;
  }
  else if (ghosts > 0) {
    console.log("Pacman at a ghost");
    ghosts--;
  }
  else {
    break
  }



}

console.log("Pacman goes home.")
