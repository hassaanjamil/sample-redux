
import * as React from 'react';
import { StyleSheet, View, Text, FlatList } from "react-native";
import { store } from '../store/store';

const ListScreen = props => {

    const { value } = store.getState();
    const [counter, setCounter] = React.useState(value);

    React.useEffect(() => {
        store.subscribe(() => {
            const { value } = store.getState();
            setCounter(value);
        })
    }, [store]);

    return (
        <View styles={styles.screen}>
            <Text>Previous Screen Count: {counter}</Text>
            {/* <FlatList
                keyExtractor={ }
                renderItem={ }
                data={ }
            /> */}
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default ListScreen;