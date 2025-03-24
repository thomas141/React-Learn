import Counter from "../components/Counter";
import React from "react";

class Page1 extends React.Component {
  state = { counter1: 0 };
  handleCounter1Increment = (c) => {
    this.setState({ counter1: this.state.counter1 + 1 });
  };
  render() {
    return (
      <Counter
        count={this.state.counter1}
        increment={this.handleCounter1Increment}
      />
    );
  }
}
export default Page1;
