type AboutTextType = {
    id: number,
    text: string
}

export type AboutType = {
    id: number,
    title: string,
    image: string,
    aboutText: AboutTextType[]
}

type TextType = {
    id: number,
    text: string
}

type SubdivisionsTextType = {
    id: number,
    subdivisionsTitle: string,
    text: TextType[]
}

export type SubdivisionsType = {
    id: number,
    title: string,
    subdivisionsText: SubdivisionsTextType[]
}