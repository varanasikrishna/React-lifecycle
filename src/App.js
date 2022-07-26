import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { show: true, count: 0 };
    console.log("Inside constructor");
  }

  delHeader = () => {
    this.setState({ show: false });
  };

  UNSAFE_componentWillMount() {
    console.log("ComponentWillMount");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("Inside ShouldComponentUpdate");
    console.log("Next State : ", nextState);
    console.log("Current State : ", this.state);
    return true;
  }

  componentDidUpdate() {
    console.log("Inside ComponentDidUpdate");
  }

  UNSAFE_componentWillUpdate() {
    console.log("Inside ComponentWillUpdate");
  }

  componentDidMount() {
    console.log("Inside ComponentDidMount");
  }

  render() {
    console.log("Render called for App.js");
    let myheader;
    if (this.state.show) {
      myheader = <Child />;
    }
    return (
      <div>
        <center>
          {myheader}
          <button onClick={this.delHeader}>Delete Header</button>
          <hr />
          <h2>count : {this.state.count}</h2>
          <button
            onClick={() => this.setState({ count: this.state.count + 1 })}
          >
            Increment
          </button>
        </center>
      </div>
    );
  }
}

class Child extends React.Component {
  componentWillUnmount() {
    console.log("Inside ComponentWillUnmount");
  }
  render() {
    return <h1>Hello World!</h1>;
  }
}

export default App;
