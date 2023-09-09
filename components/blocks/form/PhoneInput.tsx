import React from 'react';
import {FormInput} from "../../../styles/components/FormStyle";

const PhoneInput = ({phone}) => {
    return (
        <FormInput
            value={phone.value}
            onChange={(e) => phone.onChangePhone(e)}
            className={'form__textInput'}
            name='phone'
            type="text"
            placeholder='Ваш телефон'
        />
    );
};

export default PhoneInput;