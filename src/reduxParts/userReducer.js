import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

//for auth???
export const createHeaders = () => {
    return {
        'Content-Type': 'application/json'
        //'x-api-key': "???"
    }
}
const baseURL = "https://lagaltapi.azurewebsites.net";
const debugBaseURL = "https://localhost:7125";
export const getUserAsync = createAsyncThunk(
    'user/getUserAsync',
    async (username) => {
        const response = await fetch(baseURL+`/api/users/username/${username}`)
        if(response.ok){
            const result = response.json()
            return result;
        }
    }
)


export const checkForUserAsync = createAsyncThunk(
    'user/checkForUser',
     async (username) => {
            const response = await fetch(baseURL+`/api/users/username/${username}`)
            if(response.ok){
                return false;
            }
            else if(!response.ok) {
                return true;
            }
        }
    
)

export const createUserAsync = createAsyncThunk(
    'user/createUserAsync',
    async (token, { dispatch }) => {
        
            const checkError = await dispatch(checkForUserAsync(token.preferred_username));
            if (checkError.payload) {
            const response = await fetch(`${baseURL}/api/users/CreateUser`, {
                method: 'POST',
                headers: createHeaders(),
                body: JSON.stringify({
                    username: token.preferred_username,
                    firstName: token.given_name,
                    lastName: token.family_name,
                    email: token.email
                    })
                })
                if (!response.ok) {
                    throw new Error("Could not create user with username ")
                }
                const data = await response.json()
                
                return [null, data]
            }
        }
        
    
)

export const updateUserAsync = createAsyncThunk(
    'user/updateUserAsync',
    async (user) => {
        const response = await fetch(`${baseURL}/api/users/editWithUsername/${user.username}`, {
            method: 'PUT',
            headers: createHeaders(),
            body: JSON.stringify({
                id: user.id,
                portfolio: user.portfolio,
                isHidden: user.isHidden,
                skills: user.skills 
                })
            })
        if(response.ok){
            const result = response.json()
            return result;
        }
    }
)

export const userSlice = createSlice({
    name: 'user',
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
        setUser: (state, action) => {
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
        changeIsHidden: (state) => {
            state.isHidden = !state.isHidden;
        },
        setPortfolio: (state, action) => {
            state.portfolio = action.payload;
        },
        setUpdated: (state, action) => {
            state.updated = action.payload;
        }
        
    },
    extraReducers: {
        [checkForUserAsync.fulfilled] : (state, action) => {
            state.username = action.payload.username;
        },
        [createUserAsync.fulfilled] : (state, action) => {
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
        [getUserAsync.fulfilled] : (state, action) => {
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

export const {setUser, changeIsHidden, setPortfolio, setUpdated} = userSlice.actions
export default userSlice.reducer