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


  handleChange(event) {
    this.setState({value: event.target.value});
    console.log(event.target.value);
  }
  render() {
    return (
    <div>
      <form>
          <textarea id="notes" value={this.props.items} onChange={this.handleChange}/>
        <input type="Submit" value="Clear notepad"/>
      </form>
    </div>
    );
  }
}
export default Notes;
