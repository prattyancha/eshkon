import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


const initialState = {
    entities :[]
} as any;

const userSlice = createSlice({
    name : 'user',
    initialState,
    reducers :{},
    extraReducers : (builder) => {
       builder.addCase(fetchUsers.fulfilled , (state, action) => {
        state.entities.push(...action.payload)
       }) 
    },
})

export default userSlice.reducer;

export const fetchUsers = createAsyncThunk('users/getAllUsers', async(thunkApi) => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const data = await response.json();
    return data;
})
