import React from "react";
import { View, Text, FlatList, Alert } from "react-native";
import { Icon, ListItem, Avatar, Button } from "@rneui/themed";
import users from "../data/users"

export default props => {

    function confirmUserDeletion(user) {
        Alert.alert("Excluir usuário", "Deseja Excluir o usuário?", [
            {
                text: "sim",
                onPress() {
                    console.warn("delete" + user.id);
                }
            },
            {
                text: "não",
            },
            
        ])
    }

    function getActions(user) {
        return (
            <>
                <Button
                    onPress={() => props.navigation.navigate("UserForm", user)}
                    type="clear"
                    icon={<Icon name="edit" size={25} color="orange" />}
                />
                <Button
                    onPress={() => confirmUserDeletion(user)}
                    type="clear"
                    icon={<Icon name="delete" size={25} color="red" />}
                />
            </>
        )
    }

    function getUserItem({ item: user }) {
        return (
            <ListItem bottomDivider onPress={() => props.navigation.navigate("UserForm", user)}>
                <Avatar source={{ uri: user.avatarUrl }} />
                <ListItem.Content>
                    <ListItem.Title>{user.name}</ListItem.Title>
                    <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
                </ListItem.Content>
                <ListItem.Content right style={{ flexDirection: "row"}}>
                    {getActions(user)}
                </ListItem.Content>

            </ListItem>

        )
    }

    return (
        <View>
            <FlatList
                keyExtractor={user => user.id.toString()}
                data={users}
                renderItem={getUserItem}
            />
        </View>
    )
}