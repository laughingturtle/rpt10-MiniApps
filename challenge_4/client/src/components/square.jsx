export default class Square extends React.Component{
  constructor(props){
    super(props);
    // this.state = {
    //  play: ''
    // }
  }

  componentDidMount(){
    console.log('componentDidMount ran');
    //this.props.setPiece();
  }

  sqrClicked(){
    //console.log('props in the onclick Handlder in sqr', this.props);
   this.props.handleClick(this.props.row, this.props.col)
  }

  // setPiece(){
  //   // console.log('my board :', this.props.board);
  //   // console.log('my board0 pos:', this.props.board[0][0]);
  //    var row = this.props.row;
  //    var col = this.props.col;
  //   // console.log('my row: ', row);
  //   // console.log('my coll: ', coll);
  //   // console.log('my board x and y pos:', this.props.board[row][coll]);
  //  // debugger;

  //   if(this.props.board[Number(row)][Number(col)] === 1){
  //    // console.log('Red: ', this.props.board[Number(row)][Number(col)]);
  //     this.setState({
  //       play: 'red'
  //     })
  //   //  console.log(this.state.play);
  //   }
  //   if (this.props.board[Number(row)][Number(col)] === 0) {
  //   //  console.log('Yellow: ', this.props.board[Number(row)][Number(col)]);
  //     this.setState({
  //       play: 'yel'
  //     })
  //    // console.log(this.state.play);
  //   }

  // }

  render () {
    if(this.props.board[this.props.row][this.props.col] === 1 ){
      return (
        <div className="sqr" onClick={this.sqrClicked.bind(this)} >
          { console.log('my props inside the component: ', this.props.board[this.props.row][this.props.col]) }
          <div className="red" data-x={this.props.row} data-y={this.props.col}/>
        </div>
      )
    } else if (this.props.board[this.props.row][this.props.col] === 0 ) {
      return (
        <div className="sqr" onClick={this.sqrClicked.bind(this)} >
          { console.log('my props inside the component: ', this.props.board[this.props.row][this.props.col]) }
          <div className="yel" data-x={this.props.row} data-y={this.props.col}/>
        </div>
      )
    } else {
        return (
        <div className="sqr" onClick={this.sqrClicked.bind(this)} >
          { console.log('my props inside the component: ', this.props.board[this.props.row][this.props.col]) }
          <div className="" data-x={this.props.row} data-y={this.props.col}/>
        </div>
        )
    }
  }
}

