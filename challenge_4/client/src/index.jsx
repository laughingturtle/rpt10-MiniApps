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
      play: '',
      color: 1
    }
  }

  componentDidMount() {
   // console.log('state', this.state.currRow, this.state.currColl);
  // this.init();

  }

  playRound() {
    console.log('current row/col: ', this.state.currRow, ',', this.state.currCol);
    this.isEmpty();
    this.changeColor();

    // check how many in a row / col / left diagonal / right diagonal
  }
  isEmpty() {
    // this.state.currCol;
    for(let i = 5; i > -1; i --){
      console.log('row = ', i);
      console.log('current col:', this.state.currCol);
      console.log('value at my coords:', this.state.board[i][this.state.currCol]);
      if(this.state.board[i][this.state.currCol] === null){
        // this.setState({
        //   targetRow: i
        // }), () => this.placePiece(this.state.targetRow, this.state.currCol);
        console.log('insert row/col --->: ', i, ',', this.state.currCol);
        const newBoard = this.state.board.slice(0);
        console.log('color', this.state.color);
        newBoard[i].splice(this.state.currCol, 1, this.state.color);
        console.log('board copy after edit', newBoard);
        this.setState({
          board: newBoard
        }), () => console.log('state set on new board', this.state.board);

        return;
      }
    }
  }
  changeColor(){
    if (this.state.color === 1){
      this.setState({
       // play: 'yellow',
        color: 0
      }), () => console.log('color', this.state.color, 'play:', this.state.play);
    } else if (this.state.color === 0){
      this.setState({
       // play: 'red',
        color: 1
      }), () => console.log('color', this.state.color, 'play:', this.state.play);
    }
  }

  // init(){

  //    var row = this.state.row;
  //    var col = this.state.col;

  //   if(this.state.board[Number(row)][Number(col)] === 1){
  //    // console.log('Red: ', this.props.board[Number(row)][Number(col)]);
  //     this.setState({
  //       play: 'red'
  //     })
  //   //  console.log(this.state.play);
  //   }
  //   if (this.state.board[Number(row)][Number(col)] === 0) {
  //   //  console.log('Yellow: ', this.props.board[Number(row)][Number(col)]);
  //     this.setState({
  //       play: 'yel'
  //     })
  //    // console.log(this.state.play);
  //   }

  // }

  placePiece(row, col){
    console.log('piece placed!');
    // console.log('my board :', this.props.board);
    // console.log('my board0 pos:', this.props.board[0][0]);
    //  var row = this.state.currRow;
    //  var col = this.state.currCol;
    // console.log('my row: ', row);
    // console.log('my coll: ', coll);
    // console.log('my board x and y pos:', this.props.board[row][coll]);
   // debugger;

    if(this.state.color === 1){
      console.log('Red: ', this.state.color);
      this.setState({
        play: 'red'
      })
    //  console.log(this.state.play);
    }
    if (this.state.color === 0) {
     console.log('Yellow: ', this.state.color);
      this.setState({
        play: 'yel'
      })
     // console.log(this.state.play);
    }

  }

  handleClick(row, col) {
      //console.log('clicked!', row, col);
      this.setState({
        currRow: row,
        currCol: col
      }, () => this.playRound(this.state.currRow, this.state.currCol));
     // }, () => console.log('clicked!', this.state.currRow, this.state.currCol));
    //  this.placePiece(this.state.currRow, this.state.currCol);
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