import React, {FC, FormEvent, useEffect, useState} from 'react';
import useInput from "../../hooks/useInput";
import {
    FormBody, FormBtn, FormCheckbox, FormCheckboxWrapper,
    FormInput, FormInputCheckbox,
    FormInputWrapper, FormLabel, FormOption, FormPolitics, FormPoliticsLink, FormPoliticsWrapper, FormSelect,
    FormStyle,
    FormTextarea,
    FormTextError, Success
} from "../../styles/components/FormStyle";
import Select from 'react-select';
import useLocalStorage from "../../hooks/useLocalStorage";
import Link from "next/link";
import {MediaType} from "../../types/MediaType";

const servicesOption = [
    {value: 'Электромонтажные работы', label: 'Электромонтажные работы'},
    {value: 'Проектные работы', label: 'Проектные работы'},
    {value: 'Общестроительные работы', label: 'Общестроительные работы'},
    {value: 'Санитарно-технические работы', label: 'Санитарно-технические работы'},
    {
        value: 'Работы по устройству внутренних инженерных систем и оборудования',
        label: 'Работы по устройству внутренних инженерных систем и оборудования'
    },
    {
        value: 'Монтаж электрооборудования, наружных и внутренних сетей до 750 кВ',
        label: 'Монтаж электрооборудования, наружных и внутренних сетей до 750 кВ'
    },
    {value: 'Монтаж технологического оборудования', label: 'Монтаж технологического оборудования'},
]

type PropsType = {
    props: MediaType
}

const ServicesForm: FC<PropsType> = ({props}) => {

    const name = useInput('', 'name', {isEmpty: true, minLength: 2, maxLength: 15, nameValid: true})
    const email = useInput('', 'email', {isEmpty: true, minLength: 3, isValid: true})
    const message = useInput('', 'message', {isEmpty: false, maxLength: 200})

    const [phoneNumber, setPhoneNumber] = useLocalStorage('phone', '')

    const [phoneValid, setPhoneValid] = useState<boolean>(false)
    const [select, setSelect] = useState<string>('')
    const [submit, setSubmit] = useState<boolean>(false)
    const [hasPhone, setPhone] = useState<boolean>(false)
    const [acceptPolitics, setAcceptPolitics] = useState<boolean>(true)

    const phoneHandle = () => {
        setPhone(!hasPhone)
    }

    const acceptHandle = () => {
        setAcceptPolitics(!acceptPolitics)
    }

    useEffect(() => {
        if (phoneNumber.length === 17) {
            setPhoneValid(true)
        } else {
            setPhoneValid(false)
        }
    }, [phoneNumber])

    const phoneParse = (e) => {
        let el = e.target,
            clearVal = el.dataset.phoneClear,
            pattern = el.dataset.phonePattern,
            matrix_def = "+7(___) ___-__-__",
            matrix = pattern ? pattern : matrix_def,
            i = 0,
            def = matrix.replace(/\D/g, ""),
            val = e.target.value.replace(/\D/g, "");
        if (clearVal !== 'false' && e.type === 'blur') {
            if (val.length < matrix.match(/([\_\d])/g).length) {
                e.target.value = '';
                return;
            }
        }
        if (def.length >= val.length) val = def;
        e.target.value = matrix.replace(/./g, function (a) {
            return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a
        });
        setPhoneNumber(e.target.value)
    }

    const clearLocalStorage = () => {
        localStorage.clear()
    }

    const handleSelectChange = (selectOption) => {
        setSelect(selectOption.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        const data = `
			Имя: ${name.value},  Email: ${email.value},  Телефон: ${phoneValid ? phoneNumber : 'Номер телефона не указан'},  Сообщение: ${message.value.length > 0 ? message.value : "Сообщение не указано"}
		`

        const endpoint = `https://api.telegram.org/BOT:TOKEN/sendMessage?chat_id=CHAT_ID&parse_mode=html&text=${data}`

        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'charset=utf-8',
            },
        }

        const response = await fetch(endpoint, options)

        const result = await response.json()

        if (result.ok) {
            setSubmit(true)
        }

        setTimeout(() => {
            setSubmit(false)
        }, 4000)
    }

    const customStyles = {
        option: (provided, state) => ({
            ...provided,
            borderBottom: '1px solid white',
            color: state.isSelected ? 'black' : 'grey',
            padding: 15,
            backgroundColor: 'white',
        }),
        control: () => ({
            maxWidth: 600,
            border: '1px solid white',
            backgroundColor: 'white',
            borderRadius: 3,
            display: 'flex',
            padding: '14px 0'
        }),
        singleValue: (provided, state) => {
            const opacity = state.isDisabled ? 0.5 : 1;
            const transition = 'opacity 300ms';
            return {...provided, opacity, transition};
        }
    }

    return (
        <FormStyle>
            <FormBody action="components/blocks/Form"
                      onSubmit={handleSubmit}
            >
                <FormInputWrapper {...props}>
                    <FormTextError {...props}
                                   primary={(name.isEmpty && name.isDirty) && 'primary'}>{name.isEmptyError}</FormTextError>

                    <FormTextError {...props}
                                   primary={(name.isEmpty && name.minLength && name.isDirty) && 'primary'}>
                        {name.minLengthError}
                    </FormTextError>


                    <FormTextError {...props}
                                   primary={(name.maxLength) && 'primary'}>{name.maxLengthError}</FormTextError>


                    <FormTextError {...props}
                                   primary={(name.nameError) && 'primary'}>{name.nameValidError}</FormTextError>
                    <FormInput value={name.value}
                               onBlur={e => name.onBlur()}
                               onChange={e => name.onChange(e)}
                               className={(name.isDirty && name.isEmpty) ? 'form__textInputError' : 'form__textInput'}
                               name='name'
                               type="text"
                               placeholder='Ваше имя'
                    />
                </FormInputWrapper>


                <FormInputWrapper {...props}>
                    {(email.isEmpty && email.isDirty) &&
						<FormTextError {...props}>{email.isEmptyError}</FormTextError>}

                    {(email.isEmpty && email.minLength && email.isDirty) &&
						<FormTextError {...props}>{email.minLengthError}</FormTextError>}

                    {(email.maxLength) &&
						<FormTextError {...props}>{email.maxLengthError}</FormTextError>}

                    {(email.emailError && email.isDirty) &&
						<FormTextError {...props}>{email.emailValidError}</FormTextError>}
                    <FormInput value={email.value}
                               onBlur={e => email.onBlur()}
                               onChange={e => email.onChange(e)}
                               className={(email.isDirty && email.isEmpty) ? 'form__textInputError' : 'form__textInput'}
                               name='email'
                               type="text"
                               placeholder='Email'
                    />
                </FormInputWrapper>

                <FormInputWrapper {...props} primary>
                    <FormCheckboxWrapper {...props}>
                        <FormCheckbox
                            id={'phone'}
                            type={'checkbox'}
                            checked={hasPhone}
                            onChange={e => phoneHandle()}
                            {...props}
                        />
                        <FormLabel htmlFor={'phone'} {...props}>Оставить номер телефона</FormLabel>
                    </FormCheckboxWrapper>

                    <FormInputCheckbox {...props} primary={hasPhone && "primary"}>
                        <FormInput value={phoneNumber}
                                   onChange={e => phoneParse(e)}
                                   className={'form__textInput'}
                                   name='phone'
                                   type="text"
                                   placeholder='Ваш телефон'
                        />
                    </FormInputCheckbox>
                </FormInputWrapper>

                <FormInputWrapper {...props}>
                    <FormSelect {...props}>
                        <Select styles={customStyles} defaultValue={servicesOption[0]} options={servicesOption}
                                instanceId={1}
                                onChange={handleSelectChange}/>
                    </FormSelect>
                </FormInputWrapper>

                <FormInputWrapper {...props}>

                    <FormTextError {...props}
                                   primary={(message.maxLength) && 'primary'}>{message.maxLengthError}</FormTextError>

                    <FormTextarea {...props}
                                  name='message'
                                  id="1"
                                  className={(message.isDirty && message.isEmpty) ? 'form__textInputError' : 'form__textInput'}
                                  onBlur={e => message.onBlur()}
                                  onChange={e => message.onChange(e)}
                                  placeholder="Ваше сообщение"
                                  value={message.value}
                    />
                </FormInputWrapper>

                <FormPolitics {...props}>
                    <FormPoliticsWrapper {...props}>
                        <FormCheckbox
                            id={'politics'}
                            type={'checkbox'}
                            checked={acceptPolitics}
                            onChange={e => acceptHandle()}
                            {...props}
                        />
                        <FormLabel htmlFor={'politics'} {...props} primary>
                            Оставляя заявку, вы соглашаетесь с условиями <Link href={'/politics'} legacyBehavior>
                            <FormPoliticsLink {...props}>политики конфиденциальности.</FormPoliticsLink>
                        </Link>
                        </FormLabel>


                    </FormPoliticsWrapper>
                </FormPolitics>

                <FormBtn {...props}
                         disabled={!name.inputValid || !email.inputValid || (hasPhone && !phoneValid) || !acceptPolitics}
                         type='submit'
                         onClick={() => clearLocalStorage()}
                >Оставить заявку</FormBtn>
            </FormBody>

            {
                <Success {...props} primary={submit && 'primary'}>Спасибо за оставленную заявку!</Success>
            }
        </FormStyle>
    );
};

export default ServicesForm;