import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

import { List } from "../screen/list";

const Stack = createStackNavigator();

export const Navigation = ({ }) => {
    const routeNameRef = React.useRef();
    const navigationRef = React.useRef();

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
            </Stack.Navigator>
        </NavigationContainer>
    );
};