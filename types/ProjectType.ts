type DescriptionProj = {
    id: number,
    text: string
}

export type DetailsProjectInfo = {
    id: number,
    title: string,
    year: string,
    status: boolean,
    images: string,
    address: string,
    descriptionText: string
    featureList: FeatureList[]
    optionList: OptionList[]
}

type FeatureList = {
    id: number,
    titleFeature: string,
    descriptionFeature: string
}

type OptionList = {
    id: number,
    titleOption: string,
    descriptionOption: string
    photoFirst?: string,
    photoSecond?: string,
    photoThird?: string
}

export type ProjectType = {
    id: number,
    title: string,
    year: string | number,
    descriptionProj: DescriptionProj[],
    detailsProjectInfo?: DetailsProjectInfo[]
}