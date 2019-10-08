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

  const toggleTodo = id => {
    dispatch({ type: "TOGGLE_TODO", payload: id });
  };

  const clearCompleted = () => {
    dispatch({ type: "CLEAR_COMPLETED" });
  };

  return (
    <div className="App">
      <header>
        <h1>Todos</h1>
      </header>
      <div className="todo-container">
        <TodoForm addTodo={addTodo} clearCompleted={clearCompleted} />
        <TodoList todoArray={state.todoArray} toggleTodo={toggleTodo} />
      </div>
    </div>
  );
}

export default App;
