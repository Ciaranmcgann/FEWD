// Challenge 1
// Write a function that takes a positive integer N and then calculates and displays the sum of the first N odd integers.

// this is the same as squaring a number

function square(x) {
  return x * x;
}

console.log(square(4))

// Challenge 2
// Write a function drawConsolePyramid(height) that draws a pyramid of the specified height in which the width of each row increases by two as you move downward on the console. Each of the rows should be centered with respect to the others, and the bottom line should begin at the left margin. Thus, calling drawConsolePyramid(8) should produce the following figure: 


// I created a loop function to create each row of the pyramid
// I used chatgpt to create the maths formula to create the number of stars because i am terrible at maths


function drawPyramid(height) {
  // Loop through each level of the pyramid
  for (let i = 1; i <= height; i++) {
      // Number of stars for each row: 2 * i - 1  (used chatgbt for this)
      let stars = '*'.repeat(2 * i - 1);
      
      // Number of leading spaces to center the stars (used chatgbt for this)
      let centering = ' '.repeat(height - i);
      
      // Display the spaces and stars
      console.log(centering + stars);
  }
}

drawPyramid(6);