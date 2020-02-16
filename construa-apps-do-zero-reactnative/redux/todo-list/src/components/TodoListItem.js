import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { Divider, List } from 'react-native-paper';

// import { Container } from './styles';

export default function TodoListItem({ todo }) {

    return (
        <View>
            <List.Item
                title={todo.text}
            />
            <Divider />
        </View>
    );
}
