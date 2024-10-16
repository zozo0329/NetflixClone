document
  .querySelector(".logo-section button")
  .addEventListener("click", function () {
    document.querySelector(".tags h1").innerHTML = "TANGA DI PA TO TAPOS";
    let audio = new Audio("music/pou-sound-effect.mp3");
    audio.play();
  });

document.querySelector(".tags button").addEventListener("click", function () {
  document.querySelector(".tags h1").innerHTML =
    "AY ANG KULIT NG GAGO, SABING DI PA NGA TO TAPOS";
  let audio = new Audio("music/pou-sound-effect.mp3");
  audio.play();
});
// music
document.querySelector(".door i").addEventListener("click", function () {
  let audio = new Audio("music/pou-sound-effect.mp3");
  audio.play();
});
document.querySelector(".phone i").addEventListener("click", function () {
  let audio = new Audio("music/pou-sound-effect.mp3");
  audio.play();
});
document.querySelector(".tag i").addEventListener("click", function () {
  let audio = new Audio("music/pou-sound-effect.mp3");
  audio.play();
});
document
  .querySelector(".reminder button")
  .addEventListener("click", function () {
    let audio = new Audio("music/pou-sound-effect.mp3");
    audio.play();
  });
