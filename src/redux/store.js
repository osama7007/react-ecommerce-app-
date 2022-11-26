import { configureStore } from "@reduxjs/toolkit";
import product from "./productSlice";
import wishlist from "./wishListSlice";
import cart from "./cartSlice";
import auth from "./authSlice"
const store = configureStore({
    reducer: {
        product,
        wishlist,
        cart,
        auth
    }
});
export default store;