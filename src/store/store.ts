import {combineReducers, configureStore} from "@reduxjs/toolkit"
import appReducer from "./reducers/AppSlice"

const rootReducer = combineReducers({
  appReducer
})

export const store = configureStore({
  reducer: rootReducer,
})

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

