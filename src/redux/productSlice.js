import { createSlice ,createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    records : [],
    loading : false,
    error : null
}

// async thunk logic
export const fetchProducts = createAsyncThunk("product/fetchProducts" , async(_ , thunkAPI)=>{
    const {rejectWithValue} = thunkAPI;
    try {
        const res = await fetch('http://localhost:3005/products');
        const data = await res.json();
        return data;
    }
    catch(error){
        return rejectWithValue(error.message)
    }
} );
// slice reducer
const productSlice = createSlice({
    name : 'product',
    initialState ,
    reducers:{},
    extraReducers:{
        [fetchProducts.pending] : (state)=>{
            state.loading = true;
            state.error = null;
        },
        [fetchProducts.fulfilled]:(state,action)=>{
            state.loading = false;
            state.records.length ===0 &&
            state.records.push(...action.payload);
        },
        [fetchProducts.rejected]:(state,action)=>{
            state.loading = false;
            state.error = action.payload;;
        },
    }
})
export default productSlice.reducer
