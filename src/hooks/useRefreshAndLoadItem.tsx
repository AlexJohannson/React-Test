import {refresh} from "../api/auth/loginUser.ts";
import {useAppDispatch} from "../redux/hooks/useAppDispatch.tsx";
import {AsyncThunkAction} from "@reduxjs/toolkit";
import {useAppSelector} from "../redux/hooks/useAppSelector.tsx";
import {errorSliceActions} from "../redux/slices/error-slice/ErrorSlice.ts";

export const useRefreshAndLoadItems = <T,>(loadItems:() => AsyncThunkAction<T, void, any>) => {
    const {error} = useAppSelector(({errorSlice})=>errorSlice)
    const dispatch = useAppDispatch()
    const fetchItems = async (): Promise<T | void> => {
        try {
            return  await dispatch(loadItems()).unwrap();
        } catch (e:any) {
            dispatch(errorSliceActions.setError(e.message))
            console.log(error)
            if (e.message === "Unauthorized") {
                console.log("Refreshing token...");
                await refresh();
                return dispatch(loadItems()).unwrap();
            }
        }
    };

    return {fetchItems,error}
};