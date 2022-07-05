import { combineReducers, createStore } from "redux"
import { order } from "./reducer"

const rootReducer = combineReducers({
   order:order
})

export const store = createStore(rootReducer)