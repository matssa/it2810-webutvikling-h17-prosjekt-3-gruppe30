import React, {Component} from 'react';
import DatePicker from 'material-ui/DatePicker';
import TimePicker from 'material-ui/TimePicker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


class FormAppoint extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      items: [],
      value24: null,
      valuedate: null
    };
    this.handleChangeTimePicker24 = this.handleChangeTimePicker24.bind(this);
    this.handleChangeDatePicker = this.handleChangeDatePicker.bind(this);
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



  handleChangeTimePicker24(event, date){
    this.setState({value24: date});
  }

  handleChangeDatePicker(event, date){
    this.setState({valuedate: date,});
  };

  handleSubmit(event, date) {
    var datovar = new Date(this.state.valuedate);
    var mon = datovar.getMonth();
    var day = datovar.getDate();
    var year = datovar.getFullYear();
    var datofix = day+'/'+(mon+1)+'/'+year

    var timevar = new Date(this.state.value24);
    var hour = timevar.getHours();
    var minute = timevar.getMinutes();
    var timefix = hour+':'+minute;
    this.state.items.push("HVA: " + this.state.value+ " | KL: " +timefix+ " | DATO: " + datofix);
    console.log(this.state.value+this.state.value24+"---- TEST ----"+this.state.valuedate)
    this.setState({value: event.target.value});
    this.setState({value24: date});
    console.log(localStorage)
    this.setState({value: ""});
    event.preventDefault();
  }

  renderRow() {
    let listItems = this.state.items.map((l, index) =>
    <li key = {index} id="appointmentList"> {l} <button id="removeItem" value={this.props.items} onClick={() => this.removeItem(index)}/> </li>
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
        <MuiThemeProvider>
                <DatePicker
                    hintText="Dato"
                    firstDayOfWeek={0}
                    value={this.state.valuedate}
                    onChange={this.handleChangeDatePicker}

                />
                <TimePicker
                    hintText="Klokkeslett"
                    format="24hr"
                    value={this.state.value24}
                    onChange={this.handleChangeTimePicker24}
                />
        </MuiThemeProvider>
        <label>
          <textarea
            value={this.state.value}
            onChange={this.handleChange}/>
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

export default FormAppoint;
