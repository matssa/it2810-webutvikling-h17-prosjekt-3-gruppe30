import React, { Component } from 'react';
import InputTodo from './InputTodo';


class ToDoList extends Component {

  render() {
          let l = this.props.items;
          console.log(l);
          let names = ['Jake', 'Jon', 'Thruster'];
          const listItems = l.map((l) =>
          <li>{l} <button/> </li>
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
