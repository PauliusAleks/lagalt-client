import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const baseURL = "https://lagaltapi.azurewebsites.net";
const debugBaseURL = "https://localhost:7125";

export const getViewedUserAsync = createAsyncThunk(
    'viewedUser/getViewedUserAsync',
    async (username) => {
        const response = await fetch(`${baseURL}/api/users/username/${username}`)
        if(response.ok){
            const result = response.json()
            return result;
        }
    }
)
export const getUserByIdAsync = createAsyncThunk(
    'user/getUserByIdAsync',
    async (id) => {
        const response = await fetch(`${baseURL}/api/users/id/${id}`)
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
        }, 
        [getUserByIdAsync.fulfilled] : (state,action) => {
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