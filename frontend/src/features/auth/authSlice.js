import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    user:null,
    loading:false,
    error:false,
    success:false,
    message:""
}

export const registerUser = createAsyncThunk("auth/registerUser", async (userData,thunkAPI) => {
    try {
        const response = await axios.post("http://localhost:8000/user/register",userData)
        localStorage.setItem("user",JSON.stringify(response.data))
        return response.data

    } catch (error) {
        const message = (error.response && error.response.data.message) || error.message

        // responseValue sends the error message
        return thunkAPI.rejectWithValue(message)
        
    }

})

export const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder.addCase(registerUser.pending, (state, action) => {
            state.loading = true;
        })
        .addCase(registerUser.fulfilled, (state,action) => {
            state.loading = false;
            state.success = true;
            state.user = action.payload
        })
        .addCase(registerUser.rejected, (state, action) => {
            state.loading = false;
            state.user = null;
            state.error = true;
            state.message = action.payload
        })
    }

})

// export const 
export default authSlice.reducer
