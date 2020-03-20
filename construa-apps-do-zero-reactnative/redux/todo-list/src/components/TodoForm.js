import React, { useState } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { Button } from 'react-native-paper';

import { useDispatch, useSelector } from 'react-redux';

import Input from './Input';
import { addTodo } from '../actions';

export default function TodoForm() {
    const [text, setText] = useState('');
    const dispatch = useDispatch();
    const todos = useSelector(state => state.todos)


    function handleAddAction() {
        if (text.length === 0) {
            Alert.alert(
                'Campo vazio',
                'Este campo não pode estar vazio!',
                [
                    { text: 'OK', onPress: () => {} },
                ],
                // Permite fechar o alerta pressionando fora do dialogo
                // { cancelable: true }
                { cancelable: false }
            );
            return;
        }

        dispatch(addTodo(text));
        setText('');
        console.log(todos)
        // console.log('Funciona, goroio ')
    }

    return (
        <View style={styles.formContainer}>
            <View style={styles.inputContainer}>
                <Input
                    onChangeText={setText}
                    value={text}
                />
            </View>
            <View style={styles.buttonContainer}>
                <Button
                    mode="contained"
                    onPress={handleAddAction}
                >
                    Add
                </Button>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    formContainer: {
        flexDirection: "row"
    },
    inputContainer: {
        flex: 4,
    },
    buttonContainer: {
        flex: 1,
        paddingRight: 10,
    },
});