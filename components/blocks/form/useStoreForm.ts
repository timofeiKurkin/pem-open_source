import useInput from "../../../hooks/useInput";
import {useAppDispatch, useAppSelector} from "../../../hooks/redux";
import {useEffect} from "react";
import {setFormData} from "../../../store/reducers/formData";
import {FormInitialState} from "../../../types/store";

const useStoreForm = () => {
    const nameHandler = useInput('', 'name', {isEmpty: true, minLength: 2, maxLength: 15, nameValid: true}, 'Ваше имя')
    const emailHandler = useInput('', 'email', {isEmpty: true, minLength: 3, isValid: true}, 'Email')
    const messageHandler = useInput('', 'message', {isEmpty: false, maxLength: 200}, 'Ваше сообщение')
    const phoneHandler = useInput('', 'phone', {isEmpty: true, minLength: 17})

    const dispatch = useAppDispatch()

    useEffect(() => {
        const setData: FormInitialState = {
            name: nameHandler.value,
            email: emailHandler.value,
            phone: phoneHandler.value,
            message: messageHandler.value
        }
        dispatch(setFormData(setData))
    }, [dispatch, emailHandler.value, messageHandler.value, nameHandler.value, phoneHandler.value])

    return [
        nameHandler, emailHandler, phoneHandler, messageHandler
    ]
}

export default useStoreForm