import React from "react";

// class Square extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       value: null
//     };
//   }
//   render() {
//     return (
//       <button className="square" onClick={() => this.state({ value: "X" })}>
//         {this.state.value}
//       </button>
//     );
//   }
// }

function Square(props) {
  return (
    <div>
      <button className="square" onClick={props.onClick}>
        {props.value}
      </button>
    </div>
  );
}

export default Square;
