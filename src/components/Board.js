import React from "react";

import Square from "./Square";

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true
    };
  }
  papanKotak(i) {
    return <Square value={this.props.squares[i]} onClick={() => this.props.onClick(i)} />;
  }

  render() {
    return (
      <div>
        <div className="board-row">
          {this.papanKotak(0)}
          {this.papanKotak(1)}
          {this.papanKotak(2)}
        </div>
        <div className="board-row">
          {this.papanKotak(3)}
          {this.papanKotak(4)}
          {this.papanKotak(5)}
        </div>
        <div className="board-row">
          {this.papanKotak(6)}
          {this.papanKotak(7)}
          {this.papanKotak(8)}
        </div>
      </div>
    );
  }
}

export default Board;
