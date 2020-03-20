export const ADD_TODO = 'ADD_TODO';

export const addTodo = text => ({
    type: ADD_TODO,
    text,
    // payload: text
});

export const TOGGLE_TODO = 'TOGGLE_TODO';

export const toggleTodo = todoId => ({
    type: TOGGLE_TODO,
    todoId
})

export const REMOVE_TODO = 'REMOVE_TODO';

export const removeTodo = todoId => ({
    type: REMOVE_TODO,
    todoId
})