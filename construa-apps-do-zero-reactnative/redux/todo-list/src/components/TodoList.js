import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';

import { useSelector } from 'react-redux';

import TodoListItem from './TodoListItem';

// import { Container } from './styles';

export default function TodoList() {
    const todos = useSelector(state => state.todos)

    return (
        <View style={styles.todolistcontainer}>
                {todos.map(todo => <TodoListItem key={todo.id} todo={todo}/>)}
        </View>
    );
}

const styles = StyleSheet.create({
    todolistcontainer: {
        flexDirection: 'column',
    }
});
