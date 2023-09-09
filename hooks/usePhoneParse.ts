import {InputChangeEventHandler} from "../types";

const usePhoneParse = () => {
    // const [phoneNumber, setPhoneNumber] = useState('')
    const phoneParse = (e: InputChangeEventHandler) => {
        let el = e.target
        let pattern = el.dataset.phonePattern
        let matrix_def = "+7(___) ___-__-__"
        let matrix = pattern ? pattern : matrix_def
        let i = 0
        let def = matrix.replace(/\D/g, "")
        let val = e.target.value.replace(/\D/g, "")
        if (def.length >= val.length) val = def
        return e.target.value = matrix.replace(/./g, function (a) {
            return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a
        })
    }

    return {
        phoneParse
    }
}

export default usePhoneParse