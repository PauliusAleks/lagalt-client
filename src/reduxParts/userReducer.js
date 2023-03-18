import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import keycloak from "../keycloak";
export const getUserAsync = createAsyncThunk(
    'user/getUserAsync',
    async (username) => {
        const response = await fetch(`https://lagaltapi.azurewebsites.net/api/users/getByUsername/${username}`)
        if(response.ok){
            const result = response.json()
            return result;
        }
    }
)
export const userSlice = createSlice({
    name: 'user',
    initialState: {
        //id: null,
        username: "",
        firstName: "",
        lastName: "",
        isHidden: false, 
        email: "",
        portfolio: "",
        skills: [],
        applications: []
    },
    reducers: {
        setUser: (state, action) => {
            state.firstName = action.payload.firstName;
            state.lastName = action.payload.lastName;
            state.email = action.payload.email;
            state.portfolio = action.payload.portfolio;
            state.isHidden = action.payload.isHidden;
            state.skills = action.payload.skills;
        },
        changeIsHidden: (state) => {
            state.isHidden = !state.isHidden;
        }
    },
    extraReducers: {
        [getUserAsync.fulfilled] : (state, action) => {
            //state.id = action.payload.id;
            state.username = action.payload.username;
            state.firstName = action.payload.firstName;
            state.lastName = action.payload.lastName;
            state.email = action.payload.email;
            state.portfolio = action.payload.portfolio;
            state.isHidden = action.payload.isHidden;
            state.skills = action.payload.skills;
            state.applications = action.payload.applications
        }
    }
})

export const {setUser, changeIsHidden} = userSlice.actions
export default userSlice.reducer