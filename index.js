var randomNumber1 = Math.floor((Math.random() * 6) + 1);

var randomDiceImage = "dice" + randomNumber1 + ".png";

var randomImageSource = "images/" + randomDiceImage;

var image1 = document.querySelector(".img1");
image1.setAttribute("src", randomImageSource);

var randomNumber2 = Math.floor((Math.random() * 6) + 1);

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

var image2 = document.querySelector(".img2");
image2.setAttribute("src", randomImageSource2);


// SAME AS ABOVE BUT LONG VERSION 

// function imageLoad1() {
//     if (randomNumber1 === 1) {
//         var img1 = document.querySelector(".img1")
//         img1.setAttribute("src", "images/dice1.png")
//     }
//     if (randomNumber1 === 2) {
//         var img1 = document.querySelector(".img1")
//         img1.setAttribute("src", "images/dice2.png")
//     }
//     if (randomNumber1 === 3) {
//         var img1 = document.querySelector(".img1")
//         img1.setAttribute("src", "images/dice3.png")
//     }
//     if (randomNumber1 === 4) {
//         var img1 = document.querySelector(".img1")
//         img1.setAttribute("src", "images/dice4.png")
//     }
//     if (randomNumber1 === 5) {
//         var img1 = document.querySelector(".img1")
//         img1.setAttribute("src", "images/dice5.png")
//     }
//     if (randomNumber1 === 6) {
//         var img1 = document.querySelector(".img1")
//         img1.setAttribute("src", "images/dice6.png")
//     }
// }

// function imageLoad2() {
//     if (randomNumber2 === 1) {
//         var img2 = document.querySelector(".img2")
//         img2.setAttribute("src", "images/dice1.png")
//     }
//     if (randomNumber2 === 2) {
//         var img2 = document.querySelector(".img2")
//         img2.setAttribute("src", "images/dice2.png")
//     }
//     if (randomNumber2 === 3) {
//         var img2 = document.querySelector(".img2")
//         img2.setAttribute("src", "images/dice3.png")
//     }
//     if (randomNumber2 === 4) {
//         var img2 = document.querySelector(".img2")
//         img2.setAttribute("src", "images/dice4.png")
//     }
//     if (randomNumber2 === 5) {
//         var img2 = document.querySelector(".img2")
//         img2.setAttribute("src", "images/dice5.png")
//     }
//     if (randomNumber2 === 6) {
//         var img2 = document.querySelector(".img2")
//         img2.setAttribute("src", "images/dice6.png")
//     }
// }

// ABOVE CODE IS LITTLE SHIT DON'T MIND IT

function winner() {
    if (randomNumber1 > randomNumber2) {
        var hTag = document.querySelector("h1")
        hTag.innerText = " 🚩 Player 1 wins!"
    } 
    else if (randomNumber2 > randomNumber1) {
        var hTag = document.querySelector("h1")
        hTag.innerText = " 🚩 Player 2 wins!"
    }
    else {
        var hTag = document.querySelector("h1")
        hTag.innerText = "Draw!"
    }
    
}

winner();
