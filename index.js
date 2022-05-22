var random1 = Math.floor(Math.random() * 3) + 1;
var randomPlus1 = "Hand" + random1 + ".jpg";
var imagePlus1 = "Images/" + randomPlus1;

document.querySelector(".img1").getAttribute("src");
document.querySelector(".img1").setAttribute("src", imagePlus1);


var random2 = Math.floor(Math.random() * 3) + 1;
var randomPlus2 = "Hand" + random2 + ".jpg";
var imagePlus2 = "Images/" + randomPlus2;

document.querySelector(".img2").getAttribute("src");
document.querySelector(".img2").setAttribute("src", imagePlus2);


if (random1 === 1 && random2 === 2) {
    document.querySelector("h1").innerHTML = "Scissors beats Paper";
    document.querySelector("h2").innerHTML = "Player Number one win";
} else if (random1 === 1 && random2 === 3) {
    document.querySelector("h1").innerHTML = "Rock beats Scissors";
    document.querySelector("h2").innerHTML = "Player Number two win";
} else if (random1 === 2 && random2 === 1) {
    document.querySelector("h1").innerHTML = "Scissors beats Paper";
    document.querySelector("h2").innerHTML = "Player Number two win";
} else if (random1 === 2 && random2 === 3) {
    document.querySelector("h1").innerHTML = "Paper beats Rock ";
    document.querySelector("h2").innerHTML = "Player Number one win";
} else if (random1 === 3 && random2 === 1) {
    document.querySelector("h1").innerHTML = "Rock beats Scissors ";
    document.querySelector("h2").innerHTML = "Player Number one win";
} else if (random1 === 3 && random2 === 2) {
    document.querySelector("h1").innerHTML = "Paper beats Rock ";
    document.querySelector("h2").innerHTML = "Player Number two win";
} else {
    document.querySelector("h1").innerHTML = "Try again please:";
}