import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userReducer";
import projectReducer from "./projectReducer";
import projectBannersReducer from "./projectBannersReducer";
import categoryReducer from "./categoryReducer";
import searchReducer from "./searchReducer";

export default configureStore({
    reducer: {
        user: userReducer,
        project: projectReducer,
        banners: projectBannersReducer,
        category: categoryReducer,
        search: searchReducer
    }
})