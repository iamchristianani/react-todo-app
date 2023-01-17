import React, { Component } from 'react';

class InputTodo extends Component {
  // eslint-disable-next-line
  state = {
    title: '',
  };

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    // eslint-disable-next-line
    if (this.state.title.trim()) {
      // eslint-disable-next-line
      this.props.addTodoProps(this.state.title);
      this.setState({
        title: '',
      });
    } else {
      // eslint-disable-next-line
      alert('Please write item');
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="form-container">
        <input
          type="text"
          className="input-text"
          placeholder="Add Todo..."
          name="title"
          // eslint-disable-next-line
          value={this.state.title}
          onChange={this.onChange}
        />
        {/* eslint-disable-next-line */}
        <button className="input-submit">Submit</button>
      </form>
    );
  }
}

export default InputTodo;
