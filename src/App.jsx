import React from "react";
import { registerRootComponent } from 'expo';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import UserList from "./views/UserList";
import UserForm from "./views/UserForm";

const Stack = createNativeStackNavigator()

function App(props) {
    return (
        <NavigationContainer>
            <Stack.Navigator
            initialRouteName="UserList">
                <Stack.Screen
                    name="UserList"
                    component={UserList}
                />
                <Stack.Screen
                    name="UserForm"
                    component={UserForm}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

registerRootComponent(App);
