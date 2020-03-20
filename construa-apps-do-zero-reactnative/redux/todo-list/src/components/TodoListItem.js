import React, { useState } from 'react';
import { TouchableOpacity, View, StyleSheet } from 'react-native';
import { Divider, Text, Button } from 'react-native-paper';


export default function TodoListItem({ todo, onPressTodo, onPressRemove }) {

    return (
        <TouchableOpacity onPress={onPressTodo}>
            <View style={styles.item}>
                <Text
                    style={[
                        todo.done ? styles.lineThrough : null
                    ]}
                >
                    {todo.text}
                </Text>
                <Button style={styles.itemButton} compact={true} icon="delete" mode="contained" onPress={onPressRemove}>
                </Button>
            </View>
            <Divider />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    item: {
        height: 60,
        paddingHorizontal: 10,
        justifyContent: "space-between",
        alignItems: 'center',
        flexDirection: 'row',
    },
    itemText: {
        fontSize: 20,
        flex: 7
    },
    itemButton: {
        alignSelf: 'center',
    },
    lineThrough: {
        textDecorationLine: 'line-through',
    }
})
