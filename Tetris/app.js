// It is the same as document.ready
document.addEventListener('DOMContentLoaded', () => {
  const grid = document.querySelector('.grid'); // Select the .grid element
  const ScoreDisplay = document.querySelector('#score');
  const StartBtn = document.querySelector('#start-button');
  let squares = Array.from(document.querySelectorAll('.grid div')); // get all the divs elements inside the .grid and create an array with them
  const width = 10;
})