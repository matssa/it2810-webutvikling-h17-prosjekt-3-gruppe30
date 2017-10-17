import { removeItem } from '../src/Components/InputTodo.js';

const startState = {
  text: '',
  items: [1,2,3]
}

const finState = startState.removeItem();

expect(finState).toEqual([{
    text: '',
    items: [1,2]
  }
]);
