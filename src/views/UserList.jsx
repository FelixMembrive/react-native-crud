import React from "react";
import { View, Text, FlatList } from "react-native";
import { ListItem, Avatar } from "@rneui/themed";
import users from "../data/users"

export default props => {

    function getUserItem({ item: user }) {
        return (
            <ListItem bottomDivider onPress={() => props.navigation.navigate("UserForm")}>
                <Avatar source={{ uri: user.avatarUrl }} />
                <ListItem.Content>
                    <ListItem.Title>{user.name}</ListItem.Title>
                    <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
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