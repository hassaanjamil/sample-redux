import { store } from "./store";

export const increment = () => {
    store.dispatch({ type: 'counter/incremented' })
};

export const decrement = () => {
    store.dispatch({ type: 'counter/decremented' })
};

export const resetCounter = () => {
    store.dispatch({ type: 'counter/reset' })
};