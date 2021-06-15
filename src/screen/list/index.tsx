import React, { useState, useEffect } from "react";
import {
    View,
    SafeAreaView,
    FlatList,
    ListRenderItemInfo,
} from "react-native";
import { SearchBar } from 'react-native-elements';

import { listSelector, getList, ListState } from "../../store/listSlice";
import { useSelector, useDispatch } from "react-redux";

type ListScreenProps = {}

export const List: React.FC<ListScreenProps> = () => {

    const dispatch = useDispatch();

    const { list, loading, errors }: ListState = useSelector(listSelector);
    const [search, setSearch] = useState<string>('');

    useEffect(() => {
        dispatch(getList());
    }, [dispatch]);

    const renderItem = ({ item, index }: ListRenderItemInfo<string>) => {
        return <View></View>
    };

    const onChangeInputText = (text: string) => setSearch(text);
    const keyExtractor = (item: any, index: number) => index.toString();

    return (
        <SafeAreaView>
            <SearchBar
                placeholder="Type Here..."
                value={search}
                lightTheme={true}
                onChangeText={onChangeInputText}
            />

            <FlatList
                style={{ flex: 1 }}
                data={list}
                keyExtractor={keyExtractor}
                renderItem={renderItem} />

        </SafeAreaView>
    );
};