// Displays Random Number on Button Click

var luckyNumber = Math.floor(Math.random() * 99) + 1;

document.getElementById("lucky").onclick = function() {
    alert('Your lucky number is ' + luckyNumber + '!');
}