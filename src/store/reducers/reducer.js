import { createSlice } from "@reduxjs/toolkit";
import initialState from "./initialState";

const mainSlice = createSlice({
    name: "mainSlice",
    initialState,
    reducers: {
        addProductOption: (state, action) => {
            const selectedOptionInx = state.selectedOptions.findIndex(
                (el) => el.id === action.payload.id
            );
            if (selectedOptionInx < 0) {
                state.selectedOptions.push(action.payload);
            } else if (
                state.selectedOptions[selectedOptionInx] == action.payload
            ) {
                return;
            } else {
                state.selectedOptions[selectedOptionInx] = action.payload;
            }
        },
        clearProductOption: (state, action) => {
            state.selectedOptions = [];
        },
        addToCart: (state, action) => {
            const productInx = state.cart.products.findIndex(
                (el) => el.id === action.payload.id
            );
            if (productInx >= 0) {
                state.cart.products[productInx].quantity++;
            } else {
                state.cart.products.push(action.payload);
            }
        },
        decrementItem: (state, action) => {
            const productInx = state.cart.products.findIndex(
                (el) => el.id === action.payload
            );
            if (productInx >= 0) {
                state.cart.products[productInx].quantity--;
            }
            if (state.cart.products[productInx].quantity <= 0) {
                state.cart.products.splice(productInx, 1);
            }
        },
        removeFromCart: (state, action) => {
            const productInx = state.cart.products.findIndex(
                (el) => el.id === action.payload
            );

            state.cart.products.splice(productInx, 1);
        },
        selectGift: (state, action) => {
            state.giftProducts.selectedGift = action.payload;
        },
        removeGift: (state, action) => {
            state.giftProducts.selectedGift = null;
        },
    },
});

export const {
    addProductOption,
    clearProductOption,
    addToCart,
    decrementItem,
    removeFromCart,
    selectGift,
    removeGift,
} = mainSlice.actions;
export const { reducer } = mainSlice;
