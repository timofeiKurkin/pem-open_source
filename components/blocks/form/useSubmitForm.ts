import {useState} from "react";
import handleSubmit from "./handleSubmit";
import {useAppSelector} from "../../../hooks/redux";

const useSubmitForm = () => {
    const {initialState} = useAppSelector(state => state.formReducer)

    const [submit, setSubmit] = useState(false)

    const submitHandle = async () => {
        await handleSubmit(initialState.name, initialState.email, initialState.phone, initialState.message, setSubmit)
    }

    return {
        submitHandle,
        submit
    }
}

export default useSubmitForm