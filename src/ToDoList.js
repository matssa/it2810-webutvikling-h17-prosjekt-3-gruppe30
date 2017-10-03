import React, { Component } from 'react';
import InputTodo from './InputTodo';
import update from 'react-addons-update';


class ToDoList extends Component {
  render() {
          let l = this.props.items;

          function removeItem() {
            l.splice(0,1);
            console.log(l);
            this.setState({
              data: update(this.state.data, {$splice: [[0, 1]]})
            })
          }

          let listItems = l.map((l, index) =>
          <li key = {l}>{l} <button id="removeItem" onClick={removeItem}/> </li>
          );
          return (
            <ul>
            {listItems}
            </ul>
          );
      }

  /*render() {
    let l = this.props.items;
    return (
            <ul>
              {l.map(function(name, index){
                return <li key={ index }>{name}</li>;
              })}
            </ul>
        )
  }
} // */
}

export default ToDoList;
