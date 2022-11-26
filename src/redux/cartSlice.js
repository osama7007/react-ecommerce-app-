import { createSlice } from "@reduxjs/toolkit";
const initialState = {
	cartProducts: [],
};
const cartSlice = createSlice({
    name : 'cart' , 
    initialState , 
    reducers : {
        addToCart : (state , action)=>{ // action is product object
            let productId =  state.cartProducts.findIndex(product=>product.id === action.payload.id);
            if (productId < 0){
                const newProductDetails = {...action.payload} // take copy due to object is not extendible
                newProductDetails.count = 1;
                state.cartProducts.push(newProductDetails);
                }
        }, 
        deleteProduct : (state ,action)=>{// action is product id
            let deletedId = state.cartProducts.findIndex((product) => 
                    product.id === action.payload
			    );
             state.cartProducts.splice(deletedId,1); 

        },
        increment : (state ,action)=>{
            let productId =  state.cartProducts.find(product=>product.id === action.payload);
            if (productId.count >0){
                productId.count++;
                }
        },
        decrement : (state ,action)=>{
            let productId =  state.cartProducts.find(product=>product.id === action.payload);
            if (productId.count >1){
                productId.count--;
                }
        },
        clearAll : (state)=>{
            state.cartProducts = [] ;
        }
    }
})
export default cartSlice.reducer;
export const {addToCart , deleteProduct , clearAll ,increment, decrement} = cartSlice.actions;