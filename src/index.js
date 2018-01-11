
import { render } from 'react-dom';
import React, { Component } from 'react';


const Title = props => {
  return (
    <div>
      <h1>{props.something} SOME JSX OR WHATEVER</h1>
    </div>
  )
}
const WidgetThing = props => {
  return (
    <div>
      <input type="text" onChange={props.asdf} />
    </div>
  )
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      numClicks: 0,
      revInput: ''
    }
  }
  handleClick = (e) => {
    this.setState({
      numClicks: this.state.numClicks + 1
    });
  }
  handleInput = e => {
    console.log('hi');
    this.setState({
      revInput: e.target.value.split('').reverse().join('')
    });
  }
  render() {
    return (
      <div>
        <Title something={this.state.numClicks} />
        <WidgetThing asdf={this.handleInput} />
        <p>
          {this.state.revInput}
        </p>
        <p>
          You can click this cool button.
        </p>
        <button onClick={this.handleClick}>{this.state.numClicks}</button>
      </div>
    );
  }
}



render(<App />, document.getElementById('root'));
