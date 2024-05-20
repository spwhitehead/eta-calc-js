let distance = prompt("Enter the distance in miles: ");
let speed = prompt("Enter the speed in miles per hour: ");

let distance_float = parseFloat(distance);
let speed_float = parseFloat(speed);

let eta = (distance_float / speed_float);

let message = "It will take you approximately " + eta.toFixed(2) + " hours to reach your destination.";

alert(message);