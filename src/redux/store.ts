import {combineReducers, createStore} from "redux";
import {counterReducer} from "./counterReducer";


const rootReducer = combineReducers({
    counter: counterReducer
})

export const store = createStore(rootReducer)

export type AppRootStateType = ReturnType<typeof rootReducer>;

// @ts-ignore
window.store = store;