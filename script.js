console.log('hello world!');

var x = 10; // Nicht machen!
let y = 20; // variable Variable
const PI = 3.141592; // Konstante Variable

y = 50;

const clock_elem = document.getElementById('clock');
const joke_elem = document.querySelector('[joke-norris]')

console.log(clock_elem);

function formatTime(timeValue) {
    return timeValue < 10 ? `0${timeValue}` : timeValue;
}

function getTime() {
    let date = new Date();
    let hours = formatTime(date.getHours());
    let minutes = formatTime(date.getMinutes());
    let seconds = formatTime(date.getSeconds());

    return `${hours}:${minutes}:${seconds}`;
}

setInterval(() => {
    clock_elem.innerText = getTime();
}, 1000);

fetch('https://api.chucknorris.io/jokes/random?category=dev')
    .then(httpResponse => {
        return httpResponse.json();
    }).then(joke => {
        joke_elem.innerText = joke.value;
    })