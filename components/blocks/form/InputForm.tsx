import React from 'react';
import {FormInput} from "../../../styles/components/FormStyle";

const InputForm = ({inputType}) => {

    return (
        <FormInput value={inputType.value}
                   onBlur={e => inputType.onBlur()}
                   onChange={e => inputType.onChange(e)}
                   className={(inputType.isDirty && inputType.isEmpty) ? 'form__textInputError' : 'form__textInput'}
                   name={inputType.key}
                   type="text"
                   placeholder={inputType.placeholder}
        />
    );
};

export default InputForm;