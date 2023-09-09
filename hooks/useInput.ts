import {useEffect, useState} from "react";
import useValidation from "./useValidation";
import useLocalStorage from "./useLocalStorage";
import {ValidationsKeyType, ValidationsType} from "../types/ValidationsType";
import usePhoneParse from "./usePhoneParse";
import {InputChangeEventHandler} from "../types";


const UseInput = (initialValue: string, key: ValidationsKeyType['key'], validations?: ValidationsType, placeholder?: string) => {
	const [value, setValue] = useLocalStorage(key, initialValue)
	const phone = usePhoneParse()

	const [isDirty, setDirty] = useState<boolean>(false)
	const formValid = useValidation(value, validations)


	const onChange = (e: InputChangeEventHandler) => {
		setValue(e.target.value)
	}

	const onChangePhone = (e: InputChangeEventHandler) => {
		setValue(phone.phoneParse(e))
	}

	const onBlur = () => {
		setDirty(true)
	}

	return {
		value,
		onChange,
		onBlur,
		isDirty,
		...formValid,
		key,
		placeholder,
		onChangePhone
	}
};

export default UseInput;