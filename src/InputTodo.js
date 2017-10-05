import React, {Component} from 'react';

class InputTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      items: ['']
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
    console.log(localStorage.getItem("test"));
    localStorage.setItem("test", 'test' + this.state.value);

    //let newList = localStorage.getItem("test");
    //let wordArray = this.turnFakeListtoRealList(newList);

    //console.log(wordArray);
    //let megalist = wordArray.concat(this.state.items);

    //localStorage.setItem("test", JSON.stringify(megalist));
    this.setState({value: ""});
    this.renderRow();
    event.preventDefault();
  }
  removeItem( index) {
    let list = this.state.items;
    list.splice(index,1);
    this.setState({items: list});
    localStorage.setItem("test", JSON.stringify(list));
  }

  turnFakeListtoRealList(list) {
    let i = list.replace(/"/g, '');
    let y = i.replace(/[\[\]']+/g,'');
    let b = y.replace(/,/g, ' ');
    let words = b;
    let wordArray = words.split(' ');
    return wordArray
  }

  renderRow() {
    let newList = "" + localStorage.getItem("test");
    let wordArray = this.turnFakeListtoRealList(newList);
    let listItems = wordArray.map((l, index) =>
    <li key = {index}> {l} <button id="removeItem" onClick={() => this.removeItem(index)}/> </li>
    );
    return listItems
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
