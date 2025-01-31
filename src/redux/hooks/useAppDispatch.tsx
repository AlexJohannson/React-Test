import {useDispatch} from "react-redux";
import {store} from "../store/store.ts";

export const useAppDispatch = useDispatch.withTypes<typeof store.dispatch>()