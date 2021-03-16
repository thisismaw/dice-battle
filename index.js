
var generateRoll = document.querySelectorAll(".roll")[0].addEventListener("click", function (){

    
    for (x = 0; x < 3; x++) {
        var diceRandom = Math.floor((Math.random()* 6)+1);
        var diceSource = "dice-" + diceRandom + ".png";
        var diceFolder = "images/" + diceSource;
        var diceRandom2 = Math.floor((Math.random()* 6)+1);
        var diceSource2 = "dice-" + diceRandom2 + ".png";
        var diceFolder2 = "images/" + diceSource2;
        document.querySelectorAll("img")[0].src= diceFolder;
        document.querySelectorAll("img")[1].src= diceFolder2;
    }
    if (diceRandom > diceRandom2)
    {
        document.querySelector("h2").innerHTML = "Player 1 Wins!";
        var audio = new Audio("soundfx/arcadealert.wav");
        audio.play();
    }
    else if (diceRandom < diceRandom2) {
        document.querySelector("h2").innerHTML = "Player 2 Wins!";
        var audio = new Audio("soundfx/arcadealert.wav");
        audio.play();

    }
    else {
        document.querySelector("h2").innerHTML = "It's A Tie!";
        var audio = new Audio("soundfx/tiesound.wav");
        audio.play();

    }
})