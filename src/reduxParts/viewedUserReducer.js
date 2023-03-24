import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// wow  funker update? ska se
export const getViewedUserAsync = createAsyncThunk(
    'viewedUser/getViewedUserAsync',
    async (username) => {
        const response = await fetch(`https://lagaltapi.azurewebsites.net/api/users/username/${username}`)
        if(response.ok){
            const result = response.json()
            return result;
        }
    }
)

export const viewedUserSlice = createSlice({
    name: 'viewedUser',
    initialState: {
        id: null,
        username: "",
        firstName: "",
        lastName: "",
        isHidden: false, 
        email: "",
        portfolio: "",
        skills: [],
        contributorProjects:[],
        adminProjects:[],
        updated: false
    },
    reducers: {
        setViewedUser: (state, action) => {
            state.id = action.payload.id;
            state.username = action.payload.username;
            state.firstName = action.payload.firstName;
            state.lastName = action.payload.lastName;
            state.email = action.payload.email;
            state.portfolio = action.payload.portfolio;
            state.isHidden = action.payload.isHidden;
            state.skills = action.payload.skills;
            state.contributorProjects = action.payload.contributorProjects;
            state.adminProjects = action.payload.adminProjects;
        }
        
    },
    extraReducers: {
        [getViewedUserAsync.fulfilled] : (state, action) => {
            state.id = action.payload.id;
            state.username = action.payload.username;
            state.firstName = action.payload.firstName;
            state.lastName = action.payload.lastName;
            state.email = action.payload.email;
            state.portfolio = action.payload.portfolio;
            state.isHidden = action.payload.isHidden;
            state.skills = action.payload.skills;
            state.contributorProjects = action.payload.contributorProjects;
            state.adminProjects = action.payload.adminProjects;
        }
    }
})

export const {setViewedUser} = viewedUserSlice.actions
export default viewedUserSlice.reducer