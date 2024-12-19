import React, { Component } from 'react';

class LifecycleDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    console.log('Constructor: Component is being created');
  }

  componentDidMount() {
    console.log('componentDidMount: Component has been mounted');
    // Fetch data or perform setup tasks here
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate: Component has been updated');
    if (prevState.count !== this.state.count) {
      console.log(`Count changed from ${prevState.count} to ${this.state.count}`);
    }
  }

  componentWillUnmount() {
    console.log('componentWillUnmount: Component is about to be unmounted');
    // Clean up tasks like canceling API requests, removing event listeners, etc.
  }

  handleIncrement = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  handleDecrement = () => {
    this.setState((prevState) => ({
      count: prevState.count - 1,
    }));
  };

  render() {
    console.log('Render: Component is being rendered');
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.handleIncrement}>Increment</button>
        <button onClick={this.handleDecrement}>Decrement</button>
      </div>
    );
  }
}

export default LifecycleDemo;
