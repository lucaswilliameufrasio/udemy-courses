import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO } from "../actions";

let nextId = 1;

const todoListReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_TODO:
            console.log('Todo adicionado: ', action.text);
            const newTodo = {
                id: nextId++,
                // text: action.payload
                text: action.text,
                done: false
            }

            return [...state, newTodo];
        case TOGGLE_TODO:
            return state.map(todo => {
                if (todo.id == action.todoId)
                    // return Object.assign({}, todo, { done: !todo.done }); 
                    return {
                        ...todo,
                        done: !todo.done
                    }
                return todo;
            });
        case REMOVE_TODO:
            return state.filter(({ id }) => id !== action.todoId)

        default:
            return state;
    }
}

export default todoListReducer;