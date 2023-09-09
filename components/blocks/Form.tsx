import {FC, useState} from "react";
import {
    FormBody,
    FormBtn,
    FormCheckbox,
    FormCheckboxWrapper,
    FormInputCheckbox,
    FormInputWrapper,
    FormLabel,
    FormPolitics,
    FormPoliticsLink,
    FormPoliticsWrapper,
    FormStyle,
    FormTextarea,
    FormTextError,
    Success
} from "../../styles/components/FormStyle";
import Link from "next/link";
import {MediaType} from "../../types/MediaType";
import InputForm from "./form/InputForm";
import PhoneInput from "./form/PhoneInput";
import useStoreForm from "./form/useStoreForm";
import useSubmitForm from "./form/useSubmitForm";

type PropsType = {
    props: MediaType
}

const Form: FC<PropsType> = ({props}) => {

    const [nameHandler, email, phone, message] = useStoreForm()

    const [hasPhone, setPhone] = useState<boolean>(false)
    const [acceptPolitics, setAcceptPolitics] = useState<boolean>(true)
    const submitForm = useSubmitForm()

    const phoneHandle = () => {
        setPhone((prev) => (!prev))
    }

    const acceptHandle = () => {
        setAcceptPolitics((prev) => (!prev))
    }

    const clearLocalStorage = () => {
        localStorage.clear()
    }

    const submitData = async (e) => {
        e.preventDefault()
        await submitForm.submitHandle()
    }

    return (
        <FormStyle>
            <FormBody action="components/blocks/Form"
                      onSubmit={e => submitData(e)}
            >
                <FormInputWrapper {...props}>

                    <FormTextError {...props}
                                   primary={(nameHandler.isEmpty && nameHandler.isDirty) && 'primary'}>{nameHandler.isEmptyError}</FormTextError>

                    <FormTextError {...props}
                                   primary={(nameHandler.isEmpty && nameHandler.minLength && nameHandler.isDirty) && 'primary'}>
                        {nameHandler.minLengthError}
                    </FormTextError>


                    <FormTextError {...props}
                                   primary={(nameHandler.maxLength) && 'primary'}>{nameHandler.maxLengthError}</FormTextError>


                    <FormTextError {...props}
                                   primary={(nameHandler.nameError) && 'primary'}>{nameHandler.nameValidError}</FormTextError>

                    <InputForm inputType={nameHandler}/>

                </FormInputWrapper>


                <FormInputWrapper {...props}>
                    <FormTextError {...props}
                                   primary={(email.isEmpty && email.isDirty) && 'primary'}>{email.isEmptyError}</FormTextError>

                    <FormTextError {...props}
                                   primary={(email.isEmpty && email.minLength && email.isDirty) && 'primary'}>{email.minLengthError}</FormTextError>

                    <FormTextError {...props}
                                   primary={(email.maxLength) && 'primary'}>{email.maxLengthError}</FormTextError>

                    <FormTextError {...props}
                                   primary={(email.emailError && email.isDirty) && 'primary'}>{email.emailValidError}</FormTextError>

                    <InputForm inputType={email}/>
                </FormInputWrapper>

                <FormInputWrapper {...props} primary>
                    <FormCheckboxWrapper {...props}>
                        <FormCheckbox
                            id={'phone'}
                            type={'checkbox'}
                            checked={hasPhone}
                            onChange={phoneHandle}
                            {...props}
                        />
                        <FormLabel htmlFor={'phone'} {...props}>Оставить номер телефона</FormLabel>
                    </FormCheckboxWrapper>

                    <FormInputCheckbox {...props} primary={hasPhone && "primary"}>
                        <PhoneInput phone={phone}/>
                    </FormInputCheckbox>
                </FormInputWrapper>


                <FormInputWrapper {...props}>

                    <FormTextError {...props}
                                   primary={(message.maxLength) && 'primary'}>{message.maxLengthError}</FormTextError>

                    <FormTextarea {...props}
                                  name='message'
                                  id="1"
                                  className={(message.isDirty && message.isEmpty) ? 'form__textInputError' : 'form__textInput'}
                                  onBlur={message.onBlur}
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
                            onChange={acceptHandle}
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
                         disabled={!nameHandler.inputValid || !email.inputValid || (hasPhone && !phone.inputValid) || !acceptPolitics}
                         type='submit'
                         onClick={() => clearLocalStorage()}
                >Оставить заявку</FormBtn>
            </FormBody>

            {
                <Success {...props} primary={submitForm.submit && 'primary'}>Спасибо за оставленную заявку!</Success>
            }
        </FormStyle>
    );
};

export default Form;