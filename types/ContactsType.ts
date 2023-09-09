export type ContactsType = {
    id: number,
    title: string,
    description: string
}

type ReqList = {
    id: number,
    title: string,
    description: string
}

type VacanciesItemType = {
    id: number,
    title: string,
    reqList: ReqList[]
}

export type VacanciesType = {
    id: number,
    title: string,
    positionsList: VacanciesItemType[]
}

export type Contact = {
    phone: string,
    mail: string,
    copyright: string
}