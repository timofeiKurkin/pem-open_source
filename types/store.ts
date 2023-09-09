import {ProjectType} from "./ProjectType";

export type InitialState = {
    project: ProjectType[],
    filterProject: ProjectType[],
    newOffset: number,
    currentItems: ProjectType[]
    isLoading?: boolean,
    error?: string | '',
    page: number,
    limit: number
}

export type FormInitialState = {
    name: string,
    email: string,
    phone?: string,
    message?: string
}