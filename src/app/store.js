import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice"

// TODO 1. redux storeを作る。
export default configureStore({
    reducer: {
        // TODO 4. reducerを追加
        counter: counterReducer
    },
})
