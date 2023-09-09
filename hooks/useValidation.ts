import {useEffect, useState} from "react";


const UseValidation = (value, validations) => {
	const [isEmpty, setEmpty] = useState(true)
	const [minLength, setMinLength] = useState(false)
	const [maxLength, setMaxLength] = useState(false)

	const [nameError, setNameError] = useState(false)
	const [emailError, setEmailError] = useState(false)
	const [phoneError, setPhoneError] = useState(false)
	const [inputValid, setInputValid] = useState(false)

	const [isEmptyError, setEmptyError] = useState('')
	const [minLengthError, setMinLengthError] = useState('')
	const [maxLengthError, setMaxLengthError] = useState('')
	const [nameValidError, setNameValidError] = useState('')
	const [emailValidError, setEmailValidError] = useState('')
	const [phoneValidError, setPhoneValidError] = useState('')


	useEffect(() => {
		for (const validation in validations) {
			switch (validation) {
				case 'minLength':
					if (value.length < validations[validation]) {
						setMinLength(true)
						setMinLengthError(`Минимальная длина - ${validations[validation]}`)
					} else {
						setMinLength(false)
						setMinLengthError('')
					}
					break

				case 'isEmpty':
					if (value) {
						setEmpty(false)
						setEmptyError('')
					} else {
						setEmpty(true)
						setEmptyError('Поле не может быть пустым')
					}
					break

				case 'maxLength':
					if (value.length > validations[validation]) {
						setMaxLength(true)
						setMaxLengthError(`Максимальная длинна - ${validations[validation]}`)
					} else {
						setMaxLength(false)
						setMaxLengthError('')
					}
					break

				case 'isValid':
					const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
					if (!re.test(String(value).toLowerCase())) {
						setEmailError(true)
						setEmailValidError('Введен некорректный e-mail')
					} else {
						setEmailError(false)
						setEmailValidError('')
					}
					break

				case 'nameValid':
					const reName = /^([^0-9]*)$/
					if(!reName.test(String(value).toLowerCase())) {
						setNameError(true)
						setNameValidError('Имя не может содержать цифры')
					} else {
						setNameError(false)
						setNameValidError('')
					}
					break

			}
		}
	}, [value, validations])

	useEffect(() => {
		if (isEmpty || minLength || maxLength || emailError || nameError) { // и сюда
			setInputValid(false)
		} else {
			setInputValid(true)
		}
	}, [isEmpty, minLength, maxLength, emailError, nameError]) // все ошибки сюда

	return {
		isEmpty,
		minLength,
		maxLength,
		nameError,
		emailError,
		inputValid,

		minLengthError,
		maxLengthError,
		nameValidError,
		emailValidError,
		isEmptyError
	}
};

export default UseValidation;