export default class Square extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    //console.log('componentDidMount ran');
  }

  sqrClicked(){
   this.props.handleClick(this.props.row, this.props.col)
  }


  render () {
    if(this.props.board[this.props.row][this.props.col] === 1 ){
      return (
        <div className="sqr" onClick={this.sqrClicked.bind(this)} >
          <div className="red" data-x={this.props.row} data-y={this.props.col}/>
        </div>
      )
    } else if (this.props.board[this.props.row][this.props.col] === 0 ) {
      return (
        <div className="sqr" onClick={this.sqrClicked.bind(this)} >
          <div className="yel" data-x={this.props.row} data-y={this.props.col}/>
        </div>
      )
    } else {
        return (
        <div className="sqr" onClick={this.sqrClicked.bind(this)} >
          <div className="" data-x={this.props.row} data-y={this.props.col}/>
        </div>
        )
    }
  }
}

