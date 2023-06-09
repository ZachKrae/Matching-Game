clickCount = 0;
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
            document.getElementById("info").innerHTML = "MATCH";
            pickedList = [];
            pickedBoxes= [];
        } else if (randoList[pickedList[0]] === randoList[pickedList[1]] && pickedBoxes[0] == pickedBoxes[1]) {
            document.getElementById("info").innerHTML = "YOU CLICKED THE SAME PICTURE!!!";
            pickedBoxes= [];
            setTimeout(compare, 500);
        }
        else {
            document.getElementById("info").innerHTML = "NO MATCH";
            pickedBoxes= [];
            setTimeout(compare, 500);
        }
        setTimeout(() => resetInfoBox(), 500);
              }
    console.log(clickCount, pickedList);
}

function compare() {
    document.getElementById(pickedList[0]).src = "./images/grey.png";
    document.getElementById(pickedList[1]).src = "./images/grey.png";
    pickedList = [];
}

function resetGame() {
    document.getElementById("grid").innerHTML = "";
    document.getElementById("info").innerHTML = "";
    addBoxes();
}

function resetInfoBox() {
    document.getElementById("info").innerHTML = ""
}