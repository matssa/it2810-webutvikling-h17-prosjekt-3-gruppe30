import React, {Component} from 'react';

class InputTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      items: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.returnState = this.returnState.bind(this);
  }

  returnState () {
    this.props.items;
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
    let l = this.state.items;
    let listItems = l.map((l, index) =>
    <li key = {l}>{l} <button id="removeItem" onClick={removeItem}/> </li>
    );

    function removeItem(event) {
      this.state.items.splice(0,1);
    }

    return (
    <div>
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <textarea value={this.state.value} onChange={this.handleChange}/>
        </label>
        <input type="submit" value="Submit"/>
      </form>
      <ul>
        {listItems}
      </ul>
    </div>
    );
  }
}

export default InputTodo;
