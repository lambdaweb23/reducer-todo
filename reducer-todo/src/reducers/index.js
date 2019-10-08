export const initialState = {
    todoArray: [
        {
            item: 'Learn About Reducers',
            completed: false,
            id: Date.now()
        }
    ],
    // todoInput: ""
};

export function reducer(state, action) {
    console.log('action', action);
    switch (action.type) {
        case "ADD_TODO":
            const newTodo = {
                item: action.payload,
                completed: false,
                id: Date.now()
            };
            return {
                ...state,
                todoArray: [...state.todoArray, newTodo] // state.todoArray.concat(newTodo)
            };
        default:
            return state;
    }
}