import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	wishlistProducts: [],
};

const wishlistSlice = createSlice({
    name : 'wishlist' , 
    initialState , 
    reducers : {
        addToWishList : (state , action)=>{ // action is product object
            let productIde =  state.wishlistProducts.findIndex(product=>product.id === action.payload.id)
                if (productIde < 0)
                 state.wishlistProducts.push(action.payload);
        }, 
        deleteFromWishlist : (state ,action)=>{// action is product id
            let deletedId = state.wishlistProducts.findIndex((product) => 
                    product.id === action.payload
			    );
             state.wishlistProducts.splice(deletedId,1); 
        },
        clearAll : (state)=>{
            state.wishlistProducts = [] ;
        }
    }
})
export default wishlistSlice.reducer;
export const {addToWishList , deleteFromWishList , clearAll} = wishlistSlice.actions;