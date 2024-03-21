import { createReducer } from "@reduxjs/toolkit";

const buysubscriptionRequest = 'buysubscriptionRequest';
const buysubscriptionSuccess = 'buysubscriptionSuccess';
const buysubscriptionFail = 'buysubscriptionFail';

const cancelsubscriptionRequest = 'cancelsubscriptionRequest';
const cancelsubscriptionSuccess = 'cancelsubscriptionSuccess';
const cancelsubscriptionFail = 'cancelsubscriptionFail';

const clearError = 'clearError';
const clearMessage = 'clearMessage';



const subscriptionReducer = createReducer({}, (builder) => {
    builder
        .addCase(buysubscriptionRequest, (state) => {
            state.loading = true;
        })
        .addCase(buysubscriptionSuccess, (state, action) => {
            state.loading = false;
            state.subscriptionId = action.payload.subscriptionId;
        })
        .addCase(buysubscriptionFail, (state, action) => {
            state.loading = false;
            state.error = action.payload; // Access payload directly
        })
        .addCase(cancelsubscriptionRequest, (state) => {
            state.loading = true;
        })
        .addCase(cancelsubscriptionSuccess, (state, action) => {
            state.loading = false;
            state.message = action.payload;
        })
        .addCase(cancelsubscriptionFail, (state, action) => {
            state.loading = false;
            state.error = action.payload; // Access payload directly
        })
        .addCase(clearError, (state) => {
            state.error = null;
        })
        .addCase(clearMessage, (state) => {
            state.message = null;
        });
})

export default subscriptionReducer;