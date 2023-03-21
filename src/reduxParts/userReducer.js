import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

//for auth???
export const createHeaders = () => {
    return {
        'Content-Type': 'application/json'
        //'x-api-key': "???"
    }
}

export const getUserAsync = createAsyncThunk(
    'user/getUserAsync',
    async (username) => {
        const response = await fetch(`https://lagaltapi.azurewebsites.net/api/users/username/${username}`)
        if(response.ok){
            const result = response.json()
            return result;
        }
    }
)
export const checkForUserAsync = createAsyncThunk(
    'user/checkForUser',
     async (username) => {
            const response = await fetch(`https://lagaltapi.azurewebsites.net/api/users/username/${username}`)
            if(response.ok){
                return true;
            }
            else if(!response.ok) {
                return false;
            }
    }
)

export const createUserAsync = createAsyncThunk(
    'user/createUserAsync',
    async (token, { dispatch }) => {
        try {
            const checkError = await dispatch(checkForUserAsync(token.preferred_username));

            if (!checkError.payload) {
            const response = await fetch("https://lagaltapi.azurewebsites.net/api/users/CreateUser", {
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
        catch(error) {
            return [error.message, []]
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
        [checkForUserAsync.fulfilled] : (state, action) => {
            state.username = action.payload.username;
        },
        [createUserAsync.fulfilled] : (state, action) => {
            state.username = action.payload.username;
            state.firstName = action.payload.firstName;
            state.lastName = action.payload.lastName;
            state.email = action.payload.email;
        },
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