var Score = 0;

function addScore  (Score, eaten) {
  switch (eaten) {
    case "dot":
      Score += 10;
      break;

    case "pellet":
      score += 50;
      break;

      case "ghost":
      Score += 100;
      break;
  }
  return Score
}

console.log(addScore(Score, "dot"));

//
//
// var Score = 0;
//
// function addScore  (currentScore, eaten) {
//   switch (eaten) {
//     case "dot":
//       currentScore += 10;
//       break;
//
//     case "pellet":
//       currentscore += 50;
//       break;
//
//       case "ghost":
//       currentScore += 100;
//       break;
//   }
//   return Score
// }
//
// console.log(addScore(Score, "dot"));
