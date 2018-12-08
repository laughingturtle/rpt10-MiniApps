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
    console.log('current row/col: ', this.state.currRow, ',', this.state.currCol);
    this.isEmpty();
    this.changeColor();

    // check how many in a row / col / left diagonal / right diagonal
  }

  isEmpty() {
    for(let i = 5; i > -1; i --){
      if(this.state.board[i][this.state.currCol] === null){
        const newBoard = this.state.board.slice(0);
        newBoard[i].splice(this.state.currCol, 1, this.state.color);
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
        color: 0
      }), () => console.log('color', this.state.color, 'play:', this.state.play);
    } else if (this.state.color === 0){
      this.setState({
        color: 1
      }), () => console.log('color', this.state.color, 'play:', this.state.play);
    }
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