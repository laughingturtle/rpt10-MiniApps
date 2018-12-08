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
      console.log('current row/col: ', this.state.currRow, ',', this.state.currCol);
      this.isEmpty();
      // check how many in a row / col / left diagonal / right diagonal
      this.checkHorizontal();
      this.checkVertical();
      this.checkLeftDiagonal();
      //   this.checkRightDiagonal();
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
     // console.log('reset - end of line');
      for (let j = 0; j < this.state.board[i].length; j++){
        if(this.state.board[i][j] === 0){
          streak = streak +1;
      //    console.log('streak: ', streak);
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
    //  console.log(i);
      //arrayColumn(board, i);
    //  console.log('Checking column');
      var that = this;
      this.state.board.map(function(x, index){
        // console.log('that: ', that);
        // console.log('i', i);
        // console.log('index', index);
        // console.log('board', that.state.board[index][i]);
        if(that.state.board[index][i] === 1){
      //    console.log('it\'s a red!!');
          streak = streak +1;
      //    console.log('streak: ', streak);
          if(streak === 4){
            that.setState({
              win: true
            }, () => that.winv());
          }
        }
        if(that.state.board[index][i] === 0){
      //    console.log('it\'s yellow!!');
          streak = 0;
     //     console.log('streak: ', streak);
        }
      });
     streak = 0;
    // console.log('reset - end of column');
    }

    // YELLOWS //////// -------------->>
    for(let i = 0; i < this.state.board[0].length; i++){
      // console.log(i);
      // console.log('Checking column');
      var that = this;
      this.state.board.map(function(x, index){
        // console.log('that: ', that);
        // console.log('i', i);
        // console.log('index', index);
        // console.log('board', that.state.board[index][i]);
        if(that.state.board[index][i] === 0){
      //    console.log('it\'s a yellow!!');
          streak = streak +1;
      //    console.log('streak: ', streak);
          if(streak === 4){
            that.setState({
              win: true
            }, () => that.winv());
          }
        }
        if(that.state.board[index][i] === 1){
       //   console.log('it\'s red!!');
          streak = 0;
       //   console.log('streak: ', streak);
        }
      });
     streak = 0;
   //  console.log('reset - end of column');
    }

  }

  checkLeftDiagonal() {
    // console.log('checkLeftDiagonal running ---> ');
    // let streak = 0;
    // let offset = 0;
    // // REDS



        /*
           if row is 2 col 0 depth is 4
           if row is 1 col 0 depth is 5
           if row is 0 col 0 depth is 6
           if row is 0 col 1 depth is 6
           if row is 0 col 2 depth is 5
           if row is 0 col 3 depth is 4

           if starting row > 0
           depth = board.length -row;

           if starting col > 0
           depth = board[0].length - col;


        */

        // if(offset < 4){
        //   console.log('row',i +offset++);
        //   console.log('column',j);
        // }
      //   if(this.state.board[i][j] === 1){
      //     streak = streak +1;
      // //    console.log('streak: ', streak);
      //     if(streak === 4){
      //       this.setState({
      //         win: true
      //       }, () => this.windtlr());
      //     }
      //   }
      //   if(this.state.board[i][j] === 0){
      //     streak = 0;
      //   }
      //   if(i < 6){
      //     i = i + 1;
      //   }
     // }
    //}
  }


  checkRightDiagonal() {

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