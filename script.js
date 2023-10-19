console.log('hello world!');

var x = 10; // Nicht machen!
let y = 20; // variable Variable
const PI = 3.141592; // Konstante Variable

y = 50;

const clock_elem = document.getElementById('clock');

console.log(clock_elem);

function getTime() {
    let date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let seconds = date.getSeconds();

    return `${hour}:${minute}:${seconds}`;
}

setInterval(() => {
    clock_elem.innerHTML = getTime();
}, 100);