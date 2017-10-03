import React, {Component} from 'react';
import ToDoList from './ToDoList'

class InputTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      items: []
    };
    var x = ['hei', 'pa', 'deg']
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.returnState = this.returnState.bind(this);
  }

  returnState () {
    this.props.items;
  }

  returnState2 () {
    this.props.x;
  }

  addInput({input}) {
    this.setState({value: input})
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('Din todo: ' + this.state.value);
    this.state.items.push(this.state.value);
    this.setState({value: event.target.value});
    event.preventDefault();
  }

  render() {
    return (
    <div>
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <textarea value={this.state.value} onChange={this.handleChange}/>
        </label>
        <input type="submit" value="Submit"/>
      </form>
      <ToDoList items = {this.state.items}/>
    </div>
    );
  }
}

export default InputTodo;
