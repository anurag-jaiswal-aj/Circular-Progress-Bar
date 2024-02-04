
let number = document.getElementById("number");
let counter = 0;
let intervalId;

intervalId = setInterval(() => {
    if (counter == 65) {
        clearInterval(intervalId);
    } else {
        counter += 1;
        number.innerHTML = counter + "%";
    }
}, 30);
