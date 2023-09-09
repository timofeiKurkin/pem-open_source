import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {RootState, setupReducer} from "../store/store";

const store = setupReducer()

type AppDispatch = typeof store.dispatch

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector