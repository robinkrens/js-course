/* Canvas API Example */
const canvas = document.getElementById("drawArea");
const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;
const ctx = canvas.getContext('2d');

let rheight = 100;
let rwidth = 100;
let xpos = 100;
let ypos = 100;

/* The fillRect() method draws a filled rectangle whose starting point is at (x, y) and whose size is specified by width and height. The fill style is determined by the current fillStyle attribute. */
ctx.fillStyle = 'rgb(128,0,0)';
ctx.fillRect(xpos, ypos, rheight, rwidth);
ctx.fillStyle = 'rgb(0,128,0)';
ctx.fillRect(xpos+15, ypos+15, rheight-30, rwidth-30);
ctx.fillStyle = 'rgb(0,0,128)';
ctx.fillRect(xpos+25, ypos+25, rheight-50, rwidth-50);

/* Exercise 1:
 * Create a function that creates a random amount (between 10 and 100) of
 * rectangles with random colors at random positions.
 * HINT: Use canvas width and height to make sure you use the browsers maximum
 * width and height */

/* Exercise 2:
 * Implement a button on click action that creates a random objects
 * in the canvase field
 * HINT: uncomment the button in the html file */
