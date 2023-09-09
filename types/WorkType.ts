type optionType = {
    id: number,
    text: string
}

type servicesItemType = {
    id: number,
    idPath: string,
    src: string,
    title: string,
    description?: string,
    description2?: string,
    icon?: string,
    optionTitle?: string,
    option?: optionType[]
}

export type workType = {
    id: number,
    idPath: string,
    src: string,
    title: string,
    description?: string,
    description2?: string,
    icon?: string,
    optionTitle?: string,
    option?: optionType[]
}