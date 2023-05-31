import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "../../store/store";

// // позволяет не писать везде RootState
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// хук для useDispatch
// export const useAppDispatch: () => AppDispatch = useDispatch;
