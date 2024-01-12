import { createSlice } from "@reduxjs/toolkit";

const initialState = {cartIsVisible: false};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        toggleCart(state) {
            state.cartIsVisible = !state.cartIsVisible;
        }
    }
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
