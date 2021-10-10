
import * as React from 'react';
import { StyleSheet, View, Text } from "react-native";
import { store } from '../store/store';

const LocationScreen = props => {
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
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default LocationScreen;