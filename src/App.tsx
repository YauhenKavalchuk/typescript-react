import React, { Component } from 'react';
/*
type CounterState = {
  count: number,
}

type CounterProps = {
  title?: string, 
}

class Counter extends Component<CounterProps, CounterState> {
  state = {
    count: 0,
  }

  handleClick = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    console.log(`${e.clientX}, ${e.clientY}`);
    this.setState(({ count }) => ({
      count: ++count,
    }));
  }

  render() {
    return (
      <div>
        <h1>{this.props.title}{this.state.count}</h1>
        <button onClick={this.handleClick}>+1</button>
        <a href="#" onClick={this.handleClick}>Link</a>
      </div>
    );
  }
}
*/

class Form extends Component<{}, {}> {

  handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    console.log(e.currentTarget);
  }

  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Submitted!');
  }

  handleCopy = (e: React.ClipboardEvent<HTMLInputElement>) => {
    console.log('Coppied!');
  }

  render() {
    return (
      <form
        onSubmit={this.handleSubmit}
      >
        <label>
          Simple text:
          <input
            onFocus={this.handleFocus}
            onCopy={this.handleCopy}
            type="text"
            name="text"
          />
          <button
            type="submit"
          >Submit</button>
        </label>
      </form>
    );
  }
}

const App:React.FC = () => <Form />;

export default App;
