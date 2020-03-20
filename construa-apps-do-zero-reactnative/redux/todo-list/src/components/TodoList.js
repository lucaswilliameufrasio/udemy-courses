import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';

import { useSelector, useDispatch } from 'react-redux';

import TodoListItem from './TodoListItem';
import { toggleTodo, removeTodo } from '../actions';

// import { Container } from './styles';

export default function TodoList() {
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch();

    function handleTodoState(id) {
        dispatch(toggleTodo(id));
        console.log(todos, id);
    }

    function handleRemoveTodo(id) {
        dispatch(removeTodo(id));
        console.log(todos);
    }
    return (
        <View style={styles.todolistcontainer}>
            {todos.map(todo =>
                <TodoListItem
                    key={todo.id}
                    todo={todo}
                    onPressTodo={() => handleTodoState(todo.id)}
                    onPressRemove={() => handleRemoveTodo(todo.id)}
                />)}
        </View>
    );
}

const styles = StyleSheet.create({
    todolistcontainer: {
    }
});
