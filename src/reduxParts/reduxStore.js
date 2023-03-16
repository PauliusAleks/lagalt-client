import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userReducer";
import projectReducer from "./projectReducer";
import projectBannersReducer from "./projectBannersReducer";

export default configureStore({
    reducer: {
        user: userReducer,
        project: projectReducer,
        banner: projectBannersReducer
    }
})