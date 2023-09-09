import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {FormInitialState} from "../../types/store";

const initialState: FormInitialState = {
    name: '',
    email: '',
    phone: '',
    message: ''
}

const formInitialState = {
    initialState
}

export const formData = createSlice( {
    name: 'form',
    initialState: formInitialState,
    reducers: {
        setFormData(state, action: PayloadAction<FormInitialState>) {
            state.initialState = action.payload
        }
    }
})

export const {setFormData} = formData.actions
export default formData.reducer