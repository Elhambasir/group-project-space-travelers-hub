import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: {
        rockets: rocketsReducer,
    },
})
