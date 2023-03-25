import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const baseURL = "https://lagaltapi.azurewebsites.net";
const debugBaseURL = "https://localhost:7125";

export const createApplicationAsync = createAsyncThunk(
    'project/createApplicationAsync',
    async (applicationData) => {
        const response = await fetch(baseURL+ `/api/applications/createApplication`, {
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
    'project/setApplicationToAcceptedAsync',
    async (id) => {
        const response = await fetch(baseURL + `/api/applications/accept/${id}`)
        if(response.ok){
            const result = response.json()
            return result;
        }
    }
)
export const setApplicationToRejectedAsync = createAsyncThunk(
    'project/setApplicationToRejectedAsync',
    async (id) => {
        const response = await fetch(baseURL + `/api/applications/reject/${id}`)
        if(response.ok){
            const result = response.json()
            return result;
        }
    }
)

export const applicationSlice = createSlice({
    name: 'appliction',
    initialState: {
        id: null,
        userId: null,
        projectId: null, //enum
        motivationLetter: "", //enum
        state: ""
    },
    reducers: {
    },
    extraReducers: {
        [createApplicationAsync.rejected] : (state, action) => {
            state.error = action.error.message;
        }
    }
})

export default applicationSlice.reducer