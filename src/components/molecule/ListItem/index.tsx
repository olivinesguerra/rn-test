import React from "react";
import { PostItem } from "../../../store/listSlice"
import {
    View,
    Text,
    TouchableWithoutFeedback
} from "react-native";

type ListItemScreenProps = {
    item: PostItem,
    onClick?: () => void
};

export const ListItem: React.FC<ListItemScreenProps> = ({ item, onClick }) => {

    return (
        <TouchableWithoutFeedback style={{ flex: 1 }} onPress={onClick}>
            <View style={{ flex: 1, paddingTop: 15, paddingBottom: 15, paddingLeft: 30, paddingRight: 30 }}>
                <Text style={{ flex: 1, color: "#000" }}>{item.title}</Text>
            </View>
        </TouchableWithoutFeedback>
    );
};