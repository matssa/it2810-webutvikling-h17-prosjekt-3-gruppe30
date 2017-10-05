import React, {Component} from 'react';
class Notes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      items: []
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleClear(event){
    localStorage.setItem("value", "");
  }
  handleChange(event) {
    this.setState({value: event.target.value});
    console.log(event.target.value);
    localStorage.setItem('value', event.target.value);
    console.log(localStorage);
  }
  render() {
    return (
    <div>
      <form onSubmit={this.handleClear}>
          <textarea id="notes" value={localStorage.getItem('value', this.state.value)} onChange={this.handleChange}/>
          <input type="Submit" value="Clear notepad"/>
      </form>
    </div>
    );
  }
}
export default Notes;
