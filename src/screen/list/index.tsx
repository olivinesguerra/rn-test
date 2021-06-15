import React, { useState, useEffect } from "react";
import {
    View,
    SafeAreaView,
    FlatList,
    ListRenderItemInfo,
} from "react-native";
import { SearchBar } from 'react-native-elements';
import _ from "lodash";
import { listSelector, getList, PostItem } from "../../store/listSlice";
import { useSelector, useDispatch } from "react-redux";
import { ListItem } from "../../components/molecule";

import { NavigationScreenProp } from 'react-navigation';

type ListScreenProps = {
    navigation: NavigationScreenProp<any, any>
}

export const List: React.FC<ListScreenProps> = ({ navigation }) => {

    const dispatch = useDispatch();

    const listState = useSelector(listSelector);
    const [search, setSearch] = useState<string>('');
    const [searchResults, setSearchResult] = useState<PostItem[]>([]);

    useEffect(() => {
        dispatch(getList());
    }, [dispatch]);

    const renderItem = ({ item, index }: ListRenderItemInfo<PostItem>) => {
        return (
            <ListItem item={item}
                onClick={() => {
                    navigation.navigate(
                        'list-item',
                        { item },
                    );
                }}
            />)
    };

    const onChangeInputText = (text: string) => {
        setSearch(text);

        const results = _.filter(listState.list, function (item) {
            return item.title.indexOf(text) > -1;
        });

        setSearchResult(results);
    };

    const keyExtractor = (item: any, index: number) => index.toString();

    return (
        <SafeAreaView style={{ flex: 1 }}>

            <SearchBar
                placeholder="Type Here..."
                value={search}
                lightTheme={true}
                onChangeText={onChangeInputText}
            />

            <FlatList
                style={{ flex: 1 }}
                data={search != "" ? searchResults : listState.list}
                keyExtractor={keyExtractor}
                renderItem={renderItem}
            />

        </SafeAreaView>
    );
};