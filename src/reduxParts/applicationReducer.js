import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const baseURL = "https://lagaltapi.azurewebsites.net";
const debugBaseURL = "https://localhost:7125";

export const createApplicationAsync = createAsyncThunk(
    'application/createApplicationAsync',
    async (applicationData) => {
        const response = await fetch(`${baseURL}/api/applications/createApplication`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(applicationData)
        })
        if(response.ok){
            const result = response.json()
            return result;
        }
    }
)


export const setApplicationToAcceptedAsync = createAsyncThunk(
    'application/setApplicationToAcceptedAsync',
    async (id) => {
        const response = await fetch(`${baseURL}/api/applications/accept/${id}`,{
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        if(response.ok){
            const result = response.json()
            return result;
        }
    }
)
export const setApplicationToRejectedAsync = createAsyncThunk(
    'application/setApplicationToRejectedAsync',
    async (id) => {
        const response = await fetch(`${baseURL}/api/applications/reject/${id}`,{
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        if(response.ok){
            const result = response.json()
            return result;
        }
    }
)


export const applicationSlice = createSlice({
    name: 'application',
    initialState: {
        id: null,
        userId: null,
        projectId: null, //enum
        motivationLetter: "",
        state: null //enum
    },
    reducers: {
        setApplication: (state, action) => {
            state.id = action.payload.id;
            state.userId = action.payload.userId;
            state.projectId = action.payload.projectId;
            state.motivationLetter = action.payload.motivationLetter;
            state.state = action.payload.state;
        }
    },
    extraReducers: {
        [createApplicationAsync.rejected] : (state, action) => {
            state.error = action.error.message;
        }
    }
})
export const {setApplication} = applicationSlice.actions
export default applicationSlice.reducer