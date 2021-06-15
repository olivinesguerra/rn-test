import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

import { List } from "../screen/list";
import { ListItem } from "../screen/listItem";

const Stack = createStackNavigator();

export const Navigation = ({ }) => {
    return (
        <NavigationContainer >
            <Stack.Navigator initialRouteName="list">
                <Stack.Screen
                    name="list"
                    component={List}
                    options={{
                        animationTypeForReplace: "push",
                    }}
                />
                <Stack.Screen
                    name="list-item"
                    component={ListItem}
                    options={{
                        animationTypeForReplace: "push",
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};