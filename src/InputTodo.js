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
    return this.props.items;
  }

  addInput({input}) {
    this.setState({value: input})
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    this.state.items.push(this.state.value);
    this.setState({value: event.target.value});
    console.log(localStorage)
    this.setState({value: ""});
    event.preventDefault();
  }

  renderRow() {
    let listItems = this.state.items.map((l, index) =>
    <li key = {index}> {l} <button id="removeItem" value={this.props.items} onClick={() => this.removeItem(index)}/> </li>
    );
    return listItems
  }

  removeItem( index) {
    let list = this.state.items;
    list.splice(index,1);
    this.setState({items: list});

  }



  render() {

    return (
    <div>
      <form onSubmit={this.handleSubmit}>
        <label>
          <textarea value={this.state.value} onChange={this.handleChange}/>
        </label>
        <input type="submit" value="Submit"/>
      </form>
      <ul>
        {this.renderRow()}
      </ul>
    </div>
    );
  }
}

export default InputTodo;
