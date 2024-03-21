import { createReducer } from "@reduxjs/toolkit";

const contactRequest = "contactRequest"
const contactSuccess = "contactSuccess"
const contactFail = "contactFail"

const courseRequest = "courseRequest"
const courseRequestSuccess = "courseRequestSuccess"
const courseRequestFail = "courseRequestFail"


const clearError = 'clearError';
const clearMessage = 'clearMessage';

const otherReducer = createReducer({}, (builder) => {
    builder
        .addCase(contactRequest, (state) => {
            state.loading = true;
        })
        .addCase(contactSuccess, (state, action) => {
            state.loading = false;
            state.contactmessage = action.payload.message;
        })
        .addCase(contactFail, (state, action) => {
            state.loading = false;
            state.error = action.payload; // Access payload directly
        })
        .addCase(courseRequest, (state) => {
            state.loading = true;
        })
        .addCase(courseRequestSuccess, (state, action) => {
            state.loading = false;
            state.message = action.payload.message;
        })
        .addCase(courseRequestFail, (state, action) => {
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

export default otherReducer;