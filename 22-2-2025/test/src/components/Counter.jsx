import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);
  }
  handleOnClick = () => {
    this.props.increment(this.props.count);
  };
  render() {
    return (
      <>
        <button onClick={this.handleOnClick}>Click</button>
        <p>{this.props.count}</p>
      </>
    );
  }
}
export default Counter;
