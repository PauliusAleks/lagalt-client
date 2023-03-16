import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
export const getUserAsync = createAsyncThunk(
    'user/getUserAsync',
    async (id) => {
        const response = await fetch("Endpoint+id")
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
        username: "username",
        firstName: "firstName",
        lastName: "lastName",
        userStatus: false, 
        email: "email",
        portfolio: "portfolio",
        skills: [],
        applications: []
    },
    reducers: {
        setUser: (state, action) => {
            state.firstName = action.payload.firstName;
            state.lastName = action.payload.lastName;
            state.email = action.payload.email;
            state.portfolio = action.payload.portfolio;
            state.skills = action.payload.skills;
        }
    },
    extraReducers: {
        [getUserAsync.fulfilled] : (state, action) => {
            state.id = action.payload.id;
            state.username = action.payload.username;
            state.firstName = action.payload.firstName;
            state.lastName = action.payload.lastName;
            state.email = action.payload.email;
            state.portfolio = action.payload.portfolio;
            state.skills = action.payload.skills;
            state.applications = action.payload.applications
        }
    }
})

export const {setUser} = userSlice.actions
export default userSlice.reducer