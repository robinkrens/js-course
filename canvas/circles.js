/* Canvas API Example */
const canvas = document.getElementById("drawArea");
const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;
const ctx = canvas.getContext('2d');

let radius = 25;
let xpos = 100;
let ypos = 100;

/* The arc() method creates a circular arc centered at (x, y) with a radius of radius. 
 * The next two parameters are the start and end of the cicle. Here, 2 * Math.PI
 * means a full circle. 
 * Function: arc(x, y, radius, startAngle, endAngle) */
ctx.beginPath();
ctx.arc(xpos, ypos, radius, 0, 2 * Math.PI);
ctx.fillStyle = 'rgb(0,128,0)';
ctx.fill();

/* Exercise 1:
 * Create a function that creates a random amount (between 10 and 100) circles 
 * with random colors at random positions
 * HINT: Use canvas width and height to make sure you use the browsers maximum
 * width and height */

