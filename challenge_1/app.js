var round = 0;
var squareId = 1;
var player = {xoro: 'X'};
var board = [];
var valid = true;
var gameIsOver = false;
var winner;
// console.log(board[0][1]);

var play = () => {
  /* Initialize Game Board */
  var init = () => {

    board = [[null,null,null],[null,null,null],[null,null,null]];
    for(let i = 1; i < 10; i++){
      document.getElementById("sqr"+i).addEventListener("click", () => {gameplay(i)}, true);
    }
  }
  init();
}

  /* Play Round */
  var gameplay = squareId => {
    //query object gameboard, can I play next move?
    // query player object, who's play it it?
      if(!gameIsOver){
        playRound(squareId);
      }
    /* Game Over and Refresh */
    if (round === 9){
      gameOver();
    }
  }

/* Play a round */
var playRound = squareId => {
  newRound();
  console.log('sq: ', squareId);
  checkValidPlay(squareId, player.xoro);
}

// helper functions
var toggleXoro = () => {
  // console.log('valid or ? -->', valid);
  if(valid){
    if(player.xoro === 'X'){
      player.xoro = 'O';
    } else {
      player.xoro = 'X';
    }
  }
  console.log('next player', player.xoro);
}

var refresh = () => {
  location.reload();
}

var gameOver = () => {
  gameIsOver = true;
  console.log('round', round);
  for(let i = 1; i < 10; i++){
    document.getElementById("sqr"+i).removeEventListener("click", () => {gameplay(i)}, true);
  }
  var element = document.getElementById("base");
  element.innerHTML = "<strong>" + winner + " wins! </strong> Click to play again!";
  element.classList.add("hand");
  element.addEventListener("click", refresh);
}

var updateBoard = (squareId, turn) => {
    if(turn === 'X'){
      turn = 1;
    } else if(turn === 'O'){
      turn = 0;
    }

    document.getElementById("sqr"+squareId).innerHTML = player.xoro;

    if(squareId === 1 || squareId === 2 || squareId === 3 ) {
      board[0].splice(squareId -1, 1, turn)
      toggleXoro(); // toggle 'x' or 'o'
      round++;
    }
    if(squareId === 4 || squareId === 5 || squareId === 6 ) {
      board[1].splice(squareId -4, 1, turn)
      toggleXoro(); // toggle 'x' or 'o'
      round++;
    }
    if(squareId === 7 || squareId === 8 || squareId === 9 ) {
      board[2].splice(squareId -7, 1, turn)
      toggleXoro(); // toggle 'x' or 'o'
      round++;
    }
    checkWin();
    console.log('brd', board);
}

var checkValidPlay = (squareId, turn) => {
  if(squareId === 1 || squareId === 2 || squareId === 3 ) {
    console.log('my ID', squareId);
     if (board[0][squareId -1] === null) {
      updateBoard(squareId, turn);
     } else {
      invalidPlay();
     }
  }
  if(squareId === 4 || squareId === 5 || squareId === 6 ) {
    console.log('my ID', squareId);
    if (board[1][squareId -4] === null) {
      updateBoard(squareId, turn);
     } else {
      invalidPlay();
     }
  }
  if(squareId === 7 || squareId === 8 || squareId === 9 ) {
    console.log('my ID', squareId);
    if (board[2][squareId -7] === null) {
      updateBoard(squareId, turn);
     } else {
      invalidPlay();
     }
  }
}

var checkWin = () => {
  chkHoriz();
  chkDiagTopLeft();
  chkDiagTopRight();
}

var chkHoriz = () => {
  // X wins //
  if(board[0][0] === 1 && board[1][0] === 1 && board[2][0] === 1){
    console.log('X WIN\'s col 1!');
    winner = 'X';
    win(1);
  }
  if(board[0][1] === 1 && board[1][1] === 1 && board[2][1] === 1){
    console.log('X WIN\'s col 2 !');
    winner = 'X';
    win(2);
  }
  if(board[0][2] === 1 && board[1][2] === 1 && board[2][2] === 1){
    console.log('X WIN\'s col 3!');
    winner = 'X';
    win(3);
  }
  // 0 wins //
  if(board[0][0] === 0 && board[1][0] === 0 && board[2][0] === 0){
    console.log('0 WIN\'s col 1!');
    winner = 'O';
    win(1);
  }
  if(board[0][1] === 0 && board[1][1] === 0 && board[2][1] === 0){
    console.log('0 WIN\'s col 2 !');
    winner = 'O';
    win(2);
  }
  if(board[0][2] === 0 && board[1][2] === 0 && board[2][2] === 0){
    console.log('0 WIN\'s col 3!');
    winner = 'O';
    win(3);
  }
}

var chkDiagTopLeft = () => {
  if(board[0][0] === 0 && board[1][1] === 0 && board[2][2] === 0){
    console.log('0 WIN\'s left Diag!');
    winner = 'O';
    win(4);
  }
  if(board[0][0] === 1 && board[1][1] === 1 && board[2][2] === 1){
    console.log('X WIN\'s left Diag!');
    winner = 'X';
    win(4);
  }
}

var chkDiagTopRight = () => {
  if(board[0][2] === 0 && board[1][1] === 0 && board[2][0] === 0){
    console.log('0 WIN\'s right diag!');
    winner = 'O';
    win(5);
  }
  if(board[0][2] === 1 && board[1][1] === 1 && board[2][0] === 1){
    console.log('X WIN\'s right diag!');
    winner = 'X';
    win(5);
  }
}

var invalidPlay = () => {
  valid = false;
  var element = document.getElementById("base");
  element.innerHTML = "Invalid Play";
}

var newRound = () => {
  valid = true;
  var element = document.getElementById("base");
  element.innerHTML = "";
}

var win = (type) => {
  gameOver();
  if(type === 1){
    document.getElementById("sqr1").style.backgroundColor = "#9bedff";
    document.getElementById("sqr4").style.backgroundColor = "#9bedff";
    document.getElementById("sqr7").style.backgroundColor = "#9bedff";
    document.getElementById("sqr1").style.color = "#fff";
    document.getElementById("sqr4").style.color = "#fff";
    document.getElementById("sqr7").style.color = "#fff";
  }

  if(type === 2){
    document.getElementById("sqr2").style.backgroundColor = "#9bedff";
    document.getElementById("sqr5").style.backgroundColor = "#9bedff";
    document.getElementById("sqr8").style.backgroundColor = "#9bedff";
    document.getElementById("sqr2").style.color = "#fff";
    document.getElementById("sqr5").style.color = "#fff";
    document.getElementById("sqr8").style.color = "#fff";
  }

  if(type === 3){
    document.getElementById("sqr3").style.backgroundColor = "#9bedff";
    document.getElementById("sqr6").style.backgroundColor = "#9bedff";
    document.getElementById("sqr9").style.backgroundColor = "#9bedff";
    document.getElementById("sqr3").style.color = "#fff";
    document.getElementById("sqr6").style.color = "#fff";
    document.getElementById("sqr9").style.color = "#fff";
  }
  if(type === 4){
    document.getElementById("sqr1").style.backgroundColor = "#9bedff";
    document.getElementById("sqr5").style.backgroundColor = "#9bedff";
    document.getElementById("sqr9").style.backgroundColor = "#9bedff";
    document.getElementById("sqr1").style.color = "#fff";
    document.getElementById("sqr5").style.color = "#fff";
    document.getElementById("sqr9").style.color = "#fff";
  }
  if(type === 5){
    document.getElementById("sqr3").style.backgroundColor = "#9bedff";
    document.getElementById("sqr5").style.backgroundColor = "#9bedff";
    document.getElementById("sqr7").style.backgroundColor = "#9bedff";
    document.getElementById("sqr3").style.color = "#fff";
    document.getElementById("sqr5").style.color = "#fff";
    document.getElementById("sqr7").style.color = "#fff";
  }
}
