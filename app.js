
var nights;
var total;

var room = () => {
    var roomCat = document.getElementById("roomCategory").value;
    nights = document.getElementById("nights").valueAsNumber;
    switch (roomCat) {
        case ("1"):
            total = nights * 100;
            console.log('room',total)
            break;
        case ("2"):
            total = nights * 120;
            break;
        case ("3"):
            total = nights * 150;
            break;
    }
}

var spa = () => {if (document.getElementById("spa").checked) {total = total + nights * 20}}

var type = () => {
    roomType = document.getElementById("roomType").value;
    if (roomType === '1') {
        total = total * 0.75;
    } else if (roomType === '3') {
        total = total * 1.25;
    }
}

var parking = () => total = total + document.getElementById("parking").value * 10;

var calc = () => {
    room();
    spa();
    type();
    parking();
    document.getElementById("booking").innerHTML = total;
}