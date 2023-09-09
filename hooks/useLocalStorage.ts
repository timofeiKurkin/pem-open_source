import {useEffect, useState} from "react";
import {ValidationsKeyType} from "../types/ValidationsType";

const UseLocalStorage = (key: ValidationsKeyType['key'], initialValue: string) => {
	const getStorageValue = (key, initialValue) => {
		if(typeof window !== 'undefined') {
			const value: string = localStorage.getItem(key)
			const parse: string = JSON.parse(value)
			return parse || initialValue
		}
	}

	const [value, setValue] = useState(() => {
		return getStorageValue(key, initialValue)
	})

	useEffect(() => {
		localStorage.setItem(key, JSON.stringify(value))
	}, [key, value])

	return [value, setValue]
};

export default UseLocalStorage;