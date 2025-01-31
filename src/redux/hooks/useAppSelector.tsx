import { useSelector} from "react-redux";
import {store} from "../store/store.ts";

export const useAppSelector = useSelector.withTypes<ReturnType<typeof store.getState>>()