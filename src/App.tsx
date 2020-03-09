import React, { Component } from 'react';

type CounterState = {
  count: number,
}

type CounterProps = {
  title?: string,
}

class Counter extends Component<CounterProps, CounterState> {
  constructor(props: CounterProps) {
    super(props)

    this.state = {
      count: 0,
    }
  }

  static defaultProps: CounterProps = {
    title: "Default counter: ",
  }

  static getDerivedStateFromProps(props: CounterProps, state: CounterState): CounterState | null {
    return false ? { count: 2 } : null;
  }

  componentDidMount():void {

  }

  shouldComponentUpdate(nextProps: CounterProps, nextState: CounterState): boolean {
    return true;
  }

  handleClick = () => {
    this.setState(({ count }) => ({
      count: ++count,
    }));

    // this.state.count = ++count; <-- Never do this
  }

  render() {
    // this.props.title = ''; <-- And this...

    return (
      <div>
        <h1>{this.props.title}{this.state.count}</h1>
        <button onClick={this.handleClick}>+1</button>
      </div>
    );
  }
}

const App = () => <Counter title="Counter: " />

export default App;
