import React, { useReducer } from 'react';
import './App.css';

import { initialState, reducer } from './reducers/index';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log('state', state);

  const addTodo = item => {
    dispatch({ type: "ADD_TODO", payload: item });
  };

  return (
    <div className="App">
      <TodoForm addTodo={addTodo}  />
      <TodoList todoArray={state.todoArray} />
    </div>
  );
}

export default App;
