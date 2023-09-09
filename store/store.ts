import {configureStore, combineReducers} from "@reduxjs/toolkit";
import projectReducer from "./reducers/projectSlice";
import formReducer from './reducers/formData'

const rootReducer = combineReducers({
	projectReducer,
	formReducer
})

export const setupReducer = () => {
	return configureStore({
		reducer: rootReducer
	})
}

export type RootState = ReturnType<typeof rootReducer>