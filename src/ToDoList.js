import React, { Component } from 'react';
import InputTodo from './InputTodo';


class ToDoList extends Component {

  render() {
          let l = this.props.items;
          console.log(l);
          let names = ['Jake', 'Jon', 'Thruster'];

          function removeItem(event, props) {
            l.splice(0,1);
            console.log(l);

          }

          const listItems = l.map((l) =>
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
