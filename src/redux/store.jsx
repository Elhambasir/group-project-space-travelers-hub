import { configureStore } from "@reduxjs/toolkit";
import rocketsReducer from "./Rockets/rocketsSlice"

export const store = configureStore({
    reducer: {
        rockets: rocketsReducer,
    },
})
