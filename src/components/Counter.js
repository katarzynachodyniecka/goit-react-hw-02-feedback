import React, { Component } from 'react';

export class Counter extends Component {
  static defultProps = {
    step: 1,
  };
  static propTypes = {};

  constructor() {
    super();
    this.handleIncrement = this.handleIncrement.bind(this);
    this.handleDecrement = this.handleDecrement.bind(this);
  }

  handleIncrement(evt) {
    step = {step + 1};
  }

  handleDecrement(evt) {
    step = {step - 1};
  }

  render() {
    const { step } = this.props;
    return (
      <div>
        <span>0</span>
        <button type="button" onClick={this.handleIncrement}>
          Increment by {step}
        </button>
        <button type="button" onClick={this.handleDecrement}>
          Decrement by {step}
        </button>
      </div>
    );
  }
}

state = {
  good: 0,
  neutral: 0,
  bad: 0
}