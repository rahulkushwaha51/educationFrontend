import { createReducer } from "@reduxjs/toolkit";

const addToCartRequest = "addToCartRequest"
const addToCartSuccess = "addToCartSuccess"
const addToCartFail = "addToCartFail"

const getCartRequest = "getCartRequest"
const getCartSuccess = "getCartSuccess"
const getCartFail = "getCartFail"

const removeFromCartRequest = "removeFromCartRequest"
const removeFromCartSuccess = "removeFromCartSuccess"
const removeFromCartFail = "removeFromCartFail"

const clearCartRequest = "clearCartRequest"
const clearCartSuccess = "clearCartSuccess"
const clearCartFail = "clearCartFail"

const checkoutRequest = "checkoutRequest"
const checkoutSuccess = "checkoutSuccess"
const checkoutFail = "checkoutFail"

const placeOrderRequest="placeOrderRequest"
const placeOrderSuccess="placeOrderSuccess"
const placeOrderFail="placeOrderFail"

const clearError = 'clearError';
const clearMessage = 'clearMessage';

const cartReducer = createReducer({}, (builder) => {
    builder
        .addCase(addToCartRequest, (state) => {
            state.loading = true;
        })
        .addCase(addToCartSuccess, (state, action) => {
            state.loading = false;
            state.cart = action.payload.cart;
            state.message = action.payload.message;
        })
        .addCase(addToCartFail, (state, action) => {
            state.loading = false;
            state.error = action.payload; // Access payload directly
        })

        .addCase(getCartRequest, (state) => {
            state.loading = true;
        })
        .addCase(getCartSuccess, (state, action) => {
            state.loading = false;
            state.cart = action.payload.cart;
        })
        .addCase(getCartFail, (state, action) => {
            state.loading = false;
            state.cart = []; // Access payload directly
            state.error = action.payload; // Access payload directly
        })
        .addCase(removeFromCartRequest, (state) => {
            state.loading = true;
        })
        .addCase(removeFromCartSuccess, (state, action) => {
            state.loading = false;
            state.message = action.payload.message;
        })
        .addCase(removeFromCartFail, (state, action) => {
            state.loading = false;
            state.error = action.payload; // Access payload directly
        })

        .addCase(clearCartRequest, (state) => {
            state.loading = true;
        })
        .addCase(clearCartSuccess, (state, action) => {
            state.loading = false;
            state.message = action.payload.message;
        })
        .addCase(clearCartFail, (state, action) => {
            state.loading = false;
            state.error = action.payload; // Access payload directly
        })

        .addCase(checkoutRequest, (state) => {
            state.loading = true;
        })
        .addCase(checkoutSuccess, (state, action) => {
            state.loading = false;
            state.order = action.payload.order;
        })
        .addCase(checkoutFail, (state, action) => {
            state.loading = false;
            state.error = action.payload; // Access payload directly
        })

        .addCase(placeOrderRequest, (state) => {
            state.loading = true;
        })
        .addCase(placeOrderSuccess, (state, action) => {
            state.loading = false;
        })
        .addCase(placeOrderFail, (state, action) => {
            state.loading = false;
            state.error = action.payload;

        })



        .addCase(clearError, (state) => {
            state.error = null;
        })
        .addCase(clearMessage, (state) => {
            state.message = null;
        });

})

export default cartReducer;