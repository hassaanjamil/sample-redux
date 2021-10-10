import { createStore } from "redux";
import { counterReducer } from "./reducer";

let store = createStore(counterReducer)

export {store};