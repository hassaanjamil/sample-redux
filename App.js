import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { increment, decrement, resetCounter } from './src/store/actions';

import { store } from './src/store/store';

const App = props => {
  const [counter, setCounter] = React.useState(0);

  React.useEffect(() => {
    // Update the document title using the browser API
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
    <View style={styles.container}>
      {/* <View style={styles.input}>
        <TextInput
          placeholder="Enter Text"
          onChangeText={inputTextHandler}
          value={text} />
      </View> */}
      <Text style={{ fontSize: 20 }}>{counter.toString()}</Text>
      <View style={styles.buttonsContainer}>
        <View style={styles.button}>
          <Button title="+"
            onPress={incrementHandler} />
        </View>
        <View style={styles.button}>
          <Button title="-"
            onPress={decrementHandler} />
        </View>
        <View style={styles.button}>
          <Button title="Reset"
            onPress={resetHandler} />
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
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

export default App;