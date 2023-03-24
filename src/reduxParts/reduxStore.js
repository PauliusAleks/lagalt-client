import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userReducer";
import projectReducer from "./projectReducer";
import projectBannersReducer from "./projectBannersReducer";
import categoryReducer from "./categoryReducer";
import searchReducer from "./searchReducer";
import skillsReducer from "./skillsReducer";
import applicationsReducer from "./applicationsReducer"
import applicationReducer from "./applicationReducer"
import userProjectsReducer from "./userProjectsReducer";


export default configureStore({
    reducer: {
        user: userReducer,
        userProjects: userProjectsReducer,
        project: projectReducer,
        banners: projectBannersReducer,
        category: categoryReducer,
        search: searchReducer,
        skills: skillsReducer,
        applications: applicationsReducer,
        application: applicationReducer,
    }
})