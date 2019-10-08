import React, { useState } from 'react';

const TodoForm = (props) => {
    const { addTodo } = props;
    const [item, setItem] = useState("");

    const handleChange = event => setItem(event.target.value);

    const handleSubmit = event => {
        event.preventDefault();
        addTodo(item);
        setItem("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text"
                name="item"
                placeholder="todo"
                value={item}
                onChange={handleChange} />
            <button type="submit">Add Todo</button>
            <button>Clear Completed</button>
        </form>
    );
};

export default TodoForm;