import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {InitialState} from "../../types/store";
import {ProjectType} from "../../types/ProjectType";

const initialState: InitialState = {
    project: [],
    filterProject: [],
    currentItems: [],
    isLoading: false,
    newOffset: 0,
    error: '',
    page: 1,
    limit: 3
}

export const projectSlice = createSlice({
    name: 'project',
    initialState,
    reducers: {
        setProject(state, action: PayloadAction<ProjectType[]>) {
            state.project = action.payload
        },
        setFilterProject(state, action: PayloadAction<ProjectType[]>) {
            state.filterProject = action.payload
        },
        setCurrentItems(state, action: PayloadAction<ProjectType[]>) {
            state.currentItems = action.payload
        },
        setPage(state, action: PayloadAction<number>) {
            state.page = action.payload
        },
        setLoading(state, action: PayloadAction<boolean>) {
            state.isLoading = action.payload
        },
        setNewOffset(state, action: PayloadAction<number>) {
            state.newOffset = action.payload
        },
    }
})

export const {setPage,
    setProject,
    setLoading,
    setFilterProject,
    setNewOffset,
    setCurrentItems} = projectSlice.actions
export default projectSlice.reducer