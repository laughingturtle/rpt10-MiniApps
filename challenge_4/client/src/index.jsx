import Square from './components/square.jsx';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      board: [
        [null,null,null,null,null,null,null],
        [null,null,null,null,null,null,null],
        [null,null,null,null,null,null,null],
        [null,null,null,null,null,null,null],
        [null,null,null,null,null,null,null],
        [null,null,null,null,null,null,null]
      ],
      currRow: null,
      currCol: null,
      targetRow: null,
      color: 1,
      win: false
    }
  }

  componentDidMount() {

  }

  playRound() {
    if(!this.state.win){
 //     console.log('current row/col: ', this.state.currRow, ',', this.state.currCol);
      this.isEmpty();
      // check how many in a row / col / left diagonal / right diagonal
     this.checkHorizontal();
     this.checkVertical();
     this.checkLeftDiagonal();
     this.checkRightDiagonal();
      // change color
     this.changeColor();
    }
  }

  isEmpty() {
    for(let i = 5; i > -1; i --){
      if(this.state.board[i][this.state.currCol] === null){
        const newBoard = this.state.board.slice(0);
        newBoard[i].splice(this.state.currCol, 1, this.state.color);
        this.setState({
          board: newBoard
          })
         // }), () => console.log('state set on board', this.state.board);
         // debugger;
        return;
      }
    }
  }

  changeColor(){
    if (this.state.color === 1){
      this.setState({
        color: 0
      }), () => console.log('color', this.state.color, 'play:', this.state.play);
    } else if (this.state.color === 0){
      this.setState({
        color: 1
      }), () => console.log('color', this.state.color, 'play:', this.state.play);
    }
  }

  winh() {
      if(this.state.color === 1){
        console.log('YELLOW WINS Horizontally !! ');
      } else if(this.state.color === 0){
        console.log('RED WINS Horizontally !! ');
      }
  }

  winv() {
    if(this.state.color === 1){
      console.log('YELLOW WINS Vertically !! ');
    } else if(this.state.color === 0){
      console.log('RED WINS Vertically!! ');
    }
  }

  windtlr() {
    if(this.state.color === 1){
      console.log('YELLOW WINS Diagonally top left - right !! ');
    } else if(this.state.color === 0){
      console.log('RED WINS Diagonally top left - right!! ');
    }
  }

  windtrl() {
    if(this.state.color === 1){
      console.log('YELLOW WINS Diagonally top right - left !! ');
    } else if(this.state.color === 0){
      console.log('RED WINS Diagonally top right - left!! ');
    }
  }


  checkHorizontal() {
    let streak = 0;
    // REDS
    for (let i = 0; i < this.state.board.length; i++){
      streak = 0;
     // console.log('reset - end of line');
      for (let j = 0; j < this.state.board[i].length; j++){
        if(this.state.board[i][j] === 1){
          streak = streak +1;
      //    console.log('streak: ', streak);
          if(streak === 4){
            this.setState({
              win: true
            }, () => this.winh());
          }
        }
        if(this.state.board[i][j] === 0 || this.state.board[i][j] === null ){
          streak = 0;
        }
      }
    }
    // YELLOWS
    for (let i = 0; i < this.state.board.length; i++){
      streak = 0;
      for (let j = 0; j < this.state.board[i].length; j++){
        if(this.state.board[i][j] === 0){
          streak = streak +1;
          if(streak === 4){
            this.setState({
              win: true
            }, () => this.winh());
          }
        }
        if(this.state.board[i][j] === 1 || this.state.board[i][j] === null){
          streak = 0;
        }
      }
    }
  }
  checkVertical() {
    let streak = 0;
    // REDS //////// -------------->>
    for(let i = 0; i < this.state.board[0].length; i++){
      var that = this;
      this.state.board.map(function(x, index){
        if(that.state.board[index][i] === 1){
          streak = streak +1;
          if(streak === 4){
            that.setState({
              win: true
            }, () => that.winv());
          }
        }
        if(that.state.board[index][i] === 0){
          streak = 0;
        }
      });
     streak = 0;
    }

    // YELLOWS //////// -------------->>
    for(let i = 0; i < this.state.board[0].length; i++){
      var that = this;
      this.state.board.map(function(x, index){
        if(that.state.board[index][i] === 0){
          streak = streak +1;
          if(streak === 4){
            that.setState({
              win: true
            }, () => that.winv());
          }
        }
        if(that.state.board[index][i] === 1){
          streak = 0;
        }
      });
     streak = 0;
    }
  }

  checkLeftDiagonal() {
    /*
    2,0   1,0   0,0   0,1   0,2   0,3
    3,1   2,1   1,1   1,2   1,3   1,4
    4,2   3,2   2,2   2,3   2,4   2,5
    5,3   4,3   3,3   3,4   3,5   3,6
          5,4   4,4   4,5   4,6
                5,5   5,6

    0,0   0,1   0,2   0,3   0,4   0,5   0,6
    1,0   1,1   1,2   1,3   1,4   1,5   1,6
    2,0   2,1   2,2   2,3   2,4   2,5   2,6
    3,0   3,1   3,2   3,3   3,4   3,5   3,6
    4,0   4,1   4,2   4,3   4,4   4,5   4,6
    5,0   5,1   5,2   5,3   5,4   5,5   5,6
    */


    var round = 0;
    var rStreak = 0;
    var yStreak = 0;
    var arrStartIncrement = 0;
    var limitArr = [4,5,6,6,5,4];
    var rowStart = [2,1,0,0,0,0];
    var colStart = [0,0,0,1,2,3];
    var rowIncrement = rowStart[0];
    var colIncrement = colStart[0];
    var limitIncrement = 0;
    var eachNumIncrement = 0;
   // console.log('** FIRST RUN **');
    var traverseDiagonals = (row, col, diagNum, limit) => {
    //  console.log('** TRAVERSING FUNCTION **');
     //console.log('this', this.state.board);
    //  console.log('row/coll:', row, col);
    //  console.log('limit', limit);
      // console.log('current value: ', this.state.board[row][coll]);
      // console.log('limit increment', limitIncrement);
      // console.log('len of arr', limitArr.length -1);
      if(limitIncrement < limitArr.length-1){
        var that = this;
        if(this.state.board[row][col] === null){
          yStreak = 0;
          rStreak = 0;
        }

        if(this.state.board[row][col] === 1){
          rStreak++;
     //     console.log('R streak: ', rStreak);
          yStreak = 0;
     //     console.log('Y streak: ', yStreak);
          if(rStreak === 4){
            that.setState({
              win: true
            }, () => that.windtlr());
          }
        }
        if(this.state.board[row][col] === 0){
          yStreak++;
      //    console.log('Y streak: ', yStreak);
          rStreak = 0;
     //     console.log('R streak: ', rStreak);
          if(yStreak === 4){
            that.setState({
              win: true
            }, () => that.windtlr());
          }
        }
      rowIncrement ++;
      colIncrement ++;
      diagNum ++;
    //  console.log('diagNum', diagNum);
      }
      round ++;
      limit = limit;
    //  console.log('round', round);
      if(row === 5 || col === 6 || limit === diagNum){
     //   console.log('** ROW / COL LIMITS HIT - RESTART COUNT **');
        arrStartIncrement++;
        rowIncrement = rowStart[arrStartIncrement];
        colIncrement = colStart[arrStartIncrement];
        limit = limitArr[arrStartIncrement];
        diagNum = 0;
      }
      if(round === 30){
    //    console.log('** ROUND LIMIT HIT - STOP **');
        return;
      }
      // console.log(':: next round coords ::');
      // console.log('my row var ', rowStart[rowIncrement]);
      // console.log('my col var ', colStart[colIncrement]);
      // console.log('my limit var ', limitArr[limitIncrement]);
      traverseDiagonals(rowIncrement, colIncrement, diagNum, limit);
    }

    traverseDiagonals(rowStart[0], colStart[0], eachNumIncrement, limitArr[0]);
  }


  checkRightDiagonal() {
    /*
    2,6   1,6   0,6   0,5   0,4   0,3
    3,5   2,5   1,5   1,4   1,3   1,2
    4,4   3,4   2,4   2,3   2,2   2,1
    5,3   4,3   3,3   3,2   3,1   3,0
          5,2   4,2   4,1   4,0
                5,1   5,0

    0,0   0,1   0,2   0,3   0,4   0,5   0,6
    1,0   1,1   1,2   1,3   1,4   1,5   1,6
    2,0   2,1   2,2   2,3   2,4   2,5   2,6
    3,0   3,1   3,2   3,3   3,4   3,5   3,6
    4,0   4,1   4,2   4,3   4,4   4,5   4,6
    5,0   5,1   5,2   5,3   5,4   5,5   5,6
    */

   var round = 0;
   var rStreak = 0;
   var yStreak = 0;
   var arrStartIncrement = 0;
   var limitArr = [4,5,6,6,5,4];
   var rowStart = [2,1,0,0,0,0];
   var colStart = [6,6,6,5,4,3];
   var rowIncrement = rowStart[0];
   var colIncrement = colStart[0];
   var limitIncrement = 0;
   var eachNumIncrement = 0;
 //  console.log('** FIRST RUN **');
   var traverseDiagonals = (row, col, diagNum, limit) => {
    //  console.log('** TRAVERSING FUNCTION **');
    // //console.log('this', this.state.board);
    //  console.log('row/coll:', row, col);
    //  console.log('limit', limit);
     // console.log('current value: ', this.state.board[row][coll]);
     // console.log('limit increment', limitIncrement);
     // console.log('len of arr', limitArr.length -1);
     if(limitIncrement < limitArr.length-1){
       var that = this;
       if(this.state.board[row][col] === null){
         yStreak = 0;
         rStreak = 0;
       }

       if(this.state.board[row][col] === 1){
         rStreak++;
       //  console.log('R streak: ', rStreak);
         yStreak = 0;
       //  console.log('Y streak: ', yStreak);
         if(rStreak === 4){
           that.setState({
             win: true
           }, () => that.windtrl());
         }
       }
       if(this.state.board[row][col] === 0){
         yStreak++;
      //   console.log('Y streak: ', yStreak);
         rStreak = 0;
      //   console.log('R streak: ', rStreak);
         if(yStreak === 4){
           that.setState({
             win: true
           }, () => that.windtrl());
         }
       }
     rowIncrement ++;
     colIncrement --;
     diagNum ++;
    // console.log('diagNum', diagNum);
     }
     round ++;
     limit = limit;
    // console.log('round', round);
     if(row === 5 || col === 0 || limit === diagNum){
     //  console.log('** ROW / COL LIMITS HIT - RESTART COUNT **');
       arrStartIncrement++;
       rowIncrement = rowStart[arrStartIncrement];
       colIncrement = colStart[arrStartIncrement];
       limit = limitArr[arrStartIncrement];
       diagNum = 0;
     }
     if(round === 30){
     //  console.log('** ROUND LIMIT HIT - STOP **');
       return;
     }
     // console.log(':: next round coords ::');
     // console.log('my row var ', rowStart[rowIncrement]);
     // console.log('my col var ', colStart[colIncrement]);
     // console.log('my limit var ', limitArr[limitIncrement]);
     traverseDiagonals(rowIncrement, colIncrement, diagNum, limit);
   }

   traverseDiagonals(rowStart[0], colStart[0], eachNumIncrement, limitArr[0]);
  }



  handleClick(row, col) {
      this.setState({
        currRow: row,
        currCol: col
      }, () => this.playRound(this.state.currRow, this.state.currCol));
  }


  render () {
    return (
      <div>
        <div className="center">
          <div className="title">
            <h1>Connect 4</h1>
          </div>
          <div id="board">
            <div id="border">
              <div className="row">
                {this.state.board[0].map((row, index) => {
                    return <div key={index}><Square row={0} col={index} board={this.state.board} play={this.state.play} handleClick={this.handleClick.bind(this)}/></div>
                  }).reverse()
                }
              </div>
              <div className="row">
              {this.state.board[1].map((row, index) => {
                    return <div key={index}><Square row={1} col={index} board={this.state.board} play={this.state.play} handleClick={this.handleClick.bind(this)}/></div>
                  }).reverse()
                }
              </div>
              <div className="row">
              {this.state.board[2].map((row, index) => {
                    return <div key={index}><Square row={2} col={index} board={this.state.board} play={this.state.play} handleClick={this.handleClick.bind(this)}/></div>
                  }).reverse()
                }
              </div>
              <div className="row">
              {this.state.board[3].map((row, index) => {
                    return <div key={index}><Square row={3} col={index} board={this.state.board} play={this.state.play} handleClick={this.handleClick.bind(this)}/></div>
                  }).reverse()
                }
              </div>
              <div className="row">
              {this.state.board[4].map((row, index) => {
                    return <div key={index}><Square row={4} col={index} board={this.state.board} play={this.state.play} handleClick={this.handleClick.bind(this)}/></div>
                  }).reverse()
                }
              </div>
              <div className="row">
              {this.state.board[5].map((row, index) => {
                    return <div key={index}><Square row={5} col={index} board={this.state.board} play={this.state.play} handleClick={this.handleClick.bind(this)}/></div>
                  }).reverse()
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}



ReactDOM.render(<App />, document.getElementById('app'));