import React from "react";
import {
    SafeAreaView,
    ScrollView,
    View,
    Text
} from "react-native";
import { RouteProp } from '@react-navigation/native';
import { NavigationScreenProp } from 'react-navigation';

import { PostItem } from "../../store/listSlice";

type ListItemScreenProps = {
    navigation: NavigationScreenProp<any, any>,
    route: RouteProp<{ params: { item: PostItem } }, 'params'>
}

export const ListItem: React.FC<ListItemScreenProps> = ({ navigation, route }) => {

    const { item } = route.params;
    console.log(item);

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView style={{ flex: 1 }}>
                <View style={{ flex: 1, paddingLeft: 30, paddingRight: 30, paddingTop: 20, paddingBottom: 20 }}>
                    <Text style={{ marginBottom: 20 }}>{item.title}</Text>
                    <Text>{item.body}</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};