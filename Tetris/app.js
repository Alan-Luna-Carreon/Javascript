// It is the same as document.ready
document.addEventListener('DOMContentLoaded', () => {
  const grid = document.querySelector('.grid'); // Select the .grid element
  const ScoreDisplay = document.querySelector('#score');
  const StartBtn = document.querySelector('#start-button');
  let squares = Array.from(document.querySelectorAll('.grid div')); // get all the divs elements inside the .grid and create an array with them
  const width = 10;
  let speed = 500;

  //shapers
  const lTetromino = [
    [1, width + 1, width * 2 + 1, 2],
    [width, width + 1, width + 2, width * 2 + 2],
    [1, width + 1, width * 2 + 1, width * 2],
    [width, width * 2, width * 2 + 1, width * 2 + 2]
  ]

  const zTetromino = [
    [0, width, width + 1, width * 2 + 1],
    [width + 1, width + 2, width * 2, width * 2 + 1],
    [0, width, width + 1, width * 2 + 1],-
    [width + 1, width + 2, width * 2, width * 2 + 1]
  ]

  const tTetromino = [
    [1, width, width + 1, width + 2],
    [1, width + 1, width + 2, width * 2 + 1],
    [width, width + 1, width + 2, width * 2 + 1],
    [1, width, width + 1, width * 2 + 1]
  ]

  const oTetromino = [
    [0, 1, width, width + 1],
    [0, 1, width, width + 1],
    [0, 1, width, width + 1],
    [0, 1, width, width + 1]
  ]

  const iTetromino = [
    [1, width + 1, width * 2 + 1, width * 3 + 1],
    [width, width + 1, width + 2, width + 3],
    [1, width + 1, width * 2 + 1, width * 3 + 1],
    [width, width + 1, width + 2, width + 3]
  ]

  const theTetrominoes = [ 
    lTetromino, 
    zTetromino,
    tTetromino,
    oTetromino,
    iTetromino
  ]

  // this is the X position where every tetromino will apear
  let currentPosition = 4;
  let currentRotation = 0;

  //randomly select a tetromino and its frits rotation
  let random = Math.floor(Math.random()*theTetrominoes.length);
  let current = theTetrominoes[random][currentRotation];

  function draw(){
    current.forEach(index => {
      squares[currentPosition + index].classList.add('tetromino');
    });
  };

  draw();
  //undraw the tetromino
  undraw = () => {
    current.forEach(index => {
      squares[currentPosition + index].classList.remove('tetromino');
    });
  }

  //make the tetromino move down every second.
  timerId = setInterval(moveDown, speed);

  // move the element one position down
  function moveDown () {
    undraw();
    currentPosition += width;
    draw();
    freeze();
  }

  let contains = (element) => squares[currentPosition + element + width].classList.contains('taken');

  function freeze () {
    if( current.some(contains)){
      current.forEach( index => squares[currentPosition + index].classList.add('taken'));
      random = Math.floor(Math.random()*theTetrominoes.length);
      current = theTetrominoes[random][currentRotation];
      currentPosition = 4;
      draw();
    }
  }
})