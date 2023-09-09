import {useAppSelector} from "../../../hooks/redux";


const useHandleSubmit = async (name, email, phone, message, setSubmit) => {
    // e.preventDefault()


    const data = `
			Имя: ${name},  Email: ${email},  Телефон: ${phone ? phone : 'Номер телефона не указан'},  Сообщение: ${message.length > 0 ? message : "Сообщение не указано"}
		`

    const mail = `http://appsmail.ru/platform/api?method=messages.post&app_id=ID&session_key=&sig=&uid=UID&message=text_of_message`

    const endpoint = `https://api.telegram.org/BOT_ID:TOKEN/sendMessage?chat_id=CHAT_ID&parse_mode=html&text=${data}`

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'charset=utf-8',
        },
    }

    const response = await fetch(endpoint, options)

    const result = await response.json()

    if (result.ok) {
        setSubmit((prev) => (!prev))
    }

    setTimeout(() => {
        setSubmit((prev) => (!prev))
    }, 4000)
}

export default useHandleSubmit