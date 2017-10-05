import React, {Component} from 'react';
import './App.css';
class Notes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      items: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.returnState = this.returnState.bind(this);
    this.removeItem = this.removeItem.bind(this);
  }

  returnState () {
    return this.props.items;
  }

  addInput({input}) {
    this.setState({value: input})
  }

  handleChange(event) {
    this.setState({value: event.target.value});
    console.log(event.target.value);
    localStorage.setItem('value', event.target.value);
    console.log(localStorage);
  }

  handleSubmit(event) {
    this.state.items.push(this.state.value);
    this.setState({value: event.target.value});
    event.preventDefault();
  }

  removeItem(event, index) {
    this.state.items.splice(index,1);
    this.setState({value: event.target.value});
  }

  render() {
    let listItems = this.state.items.map((l, index) =>
    <li key = {l}> {l} <button id="removeItem" onClick={this.removeItem}/> </li>
    );
    return (
    <div>
      <form onSubmit={this.handleSubmit}>
        <label>
          <textarea id="notes" value={localStorage.getItem('value', this.state.value)} onChange={this.handleChange}/>
        </label>

      </form>
    </div>
    );
  }
}

export default Notes;
