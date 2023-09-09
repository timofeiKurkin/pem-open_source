export interface ValidationsType {
    isEmpty?: boolean,
    minLength?: number,
    maxLength?: number,
    isValid?: boolean,
    nameValid?: boolean,
}

export interface ValidationsKeyType {
    key: 'name' | 'email' | 'message' | 'phone'
}