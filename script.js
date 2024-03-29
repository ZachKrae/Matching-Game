clickCount = 0;
8
randoList = ["linc.png", "linc.png", "wash.png", "wash.png", "jacks.png", "jacks.png", "grant.png", 
"grant.png", "jeffs.png", "jeffs.png", "taft.png", "taft.png", "teddy.png", "teddy.png", "eisen.png", "eisen.png"]
randoList.sort(function(a, b) {
    return 0.5 - Math.random();
});
pickedList = [];
pickedBoxes = [];

function addBoxes() {
    for (i = 0; i < 16; i++) {
        square = "<img class='img-square' id = '" + i + "' src='./images/grey.png' onclick='revealBox(" + i + ")'>"
        document.getElementById("grid").innerHTML += square;
    }
}

function revealBox(boxid) {
    document.getElementById(boxid).src = "./images/" + randoList[boxid];
    clickCount += 1;

    pickedList.push(boxid);
    pickedBoxes.push(boxid);

    if (pickedList.length === 2) {
        if (randoList[pickedList[0]] === randoList[pickedList[1]] && pickedBoxes[0] != pickedBoxes[1]) {
            correctMatches++;
            if (correctMatches == 8) {
                document.getElementById("info").innerHTML = "YOU WIN!";
            } else {
                document.getElementById("info").innerHTML = "MATCH";
            }
            pickedList = [];
        } else if (randoList[pickedList[0]] === randoList[pickedList[1]] && pickedBoxes[0] == pickedBoxes[1]) {
            document.getElementById("info").innerHTML = "YOU CLICKED THE SAME PICTURE!!!";
            setTimeout(compare, 500);
        }
        else {
            document.getElementById("info").innerHTML = "NO MATCH";
            setTimeout(compare, 500);
        }
        if (correctMatches != 8) {
            setTimeout(() => resetInfoBox(), 500);
        }
        pickedBoxes= [];
    }
}

function compare() {
    document.getElementById(pickedList[0]).src = "./images/grey.png";
    document.getElementById(pickedList[1]).src = "./images/grey.png";
    pickedList = [];
}

function resetGame() {
    document.getElementById("grid").innerHTML = "";
    document.getElementById("info").innerHTML = "";
    randoList.sort(function(a, b) {
        return 0.5 - Math.random();
    });
    addBoxes();
    correctMatches = 0;
}

function resetInfoBox() {
    document.getElementById("info").innerHTML = ""
}