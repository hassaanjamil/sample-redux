import * as React from 'react';
import { StyleSheet, Text, Button, View } from "react-native";
import { store } from '../store/store';
import { increment, decrement, resetCounter } from '../store/actions';
import { primary } from '../constants/Colors';

const CounterScreen = props => {
    const [counter, setCounter] = React.useState(0);

    React.useEffect(() => {
        store.subscribe(() => {
            const { value } = store.getState();
            console.log(value);
            setCounter(value);
        })
    }, [store]);

    const incrementHandler = () => {
        increment.apply();
    }

    const decrementHandler = () => {
        decrement.apply();
    }

    const resetHandler = () => {
        resetCounter.apply();
    }

    return (
        <View style={styles.screen}>
            <Text style={{ fontSize: 20 }}>{counter.toString()}</Text>
            <View style={styles.buttonsContainer}>
                <View style={styles.button}>
                    <Button title="+"
                        onPress={incrementHandler}
                        color={primary} />
                </View>
                <View style={styles.button}>
                    <Button title="-"
                        onPress={decrementHandler}
                        color={primary} />
                </View>
                <View style={styles.button}>
                    <Button title="Reset"
                        onPress={resetHandler}
                        color={primary} />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        width: '80%',
        borderColor: 'black',
        borderWidth: 1,
    },
    buttonsContainer: {
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    button: {
        width: 100,
        padding: 10,
    },
});

export default CounterScreen;