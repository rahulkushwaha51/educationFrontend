import { createReducer } from "@reduxjs/toolkit";

const updateprofileRequest = 'updateprofileRequest';
const updateprofileSuccess = 'updateprofileSuccess';
const updateprofileFail = 'updateprofileFail';

const updateprofilepictureRequest = 'updateprofilepictureRequest';
const updateprofilepictureSuccess = 'updateprofilepictureSuccess';
const updateprofilepictureFail = 'updateprofilepictureFail';

const forgetpasswordRequest = 'forgetpasswordRequest';
const forgetpasswordSuccess = 'forgetpasswordSuccess';
const forgetpasswordFail = 'forgetpasswordFail';

const resetpasswordRequest = 'resetpasswordRequest';
const resetpasswordSuccess = 'resetpasswordSuccess';
const resetpasswordFail = 'resetpasswordFail';

const changepasswordRequest = 'changepasswordRequest';
const changepasswordSuccess = 'changepasswordSuccess';
const changepasswordFail = 'changepasswordFail';

const RemovefromPlaylistRequest = ' RemovefromPlaylistRequest';
const RemovefromPlaylistSuccess = ' RemovefromPlaylistSuccess';
const RemovefromPlaylistFail = ' RemovefromPlaylistFail';
const clearError = 'clearError';
const clearMessage = 'clearMessage';

const initialState = {
    loading: false,
    isAuthenticated: false,
    user: null,
    message: null,
    error: null,
  };

const profileReducer = createReducer({}, (builder) => {
    builder
        .addCase(updateprofileRequest, (state) => {
            state.loading = true;
        })
        .addCase(updateprofileSuccess, (state, action) => {
            state.loading = false;
            state.message = action.payload;
        })
        .addCase(updateprofileFail, (state, action) => {
            state.loading = false;
            state.error = action.payload; // Access payload directly
        })
        .addCase(updateprofilepictureRequest, (state) => {
            state.loading = true;
        })
        .addCase(updateprofilepictureSuccess, (state, action) => {
            state.loading = false;
            state.message = action.payload;
        })
        .addCase(updateprofilepictureFail, (state, action) => {
            state.loading = false;
            state.error = action.payload; // Access payload directly
        })
        .addCase(forgetpasswordRequest, (state) => {
            state.loading = true;
        })
        .addCase(forgetpasswordSuccess, (state, action) => {
            state.loading = false;
            state.message = action.payload;
        })
        .addCase(forgetpasswordFail, (state, action) => {
            state.loading = false;
            state.error = action.payload; // Access payload directly

        })
        .addCase(resetpasswordRequest, (state) => {
            state.loading = true;
        })
        .addCase(resetpasswordSuccess, (state, action) => {
            state.loading = false;
            state.message = action.payload;
        })
        .addCase(resetpasswordFail, (state, action) => {
            state.loading = false;
            state.error = action.payload; // Access payload directly
        })
        .addCase(changepasswordRequest, (state) => {
            state.loading = true;
        })
        .addCase(changepasswordSuccess, (state, action) => {
            state.loading = false;
            state.message = action.payload;
        })
        .addCase(changepasswordFail, (state, action) => {
            state.loading = false;
            state.error = action.payload; // Access payload directly
        })

        .addCase(RemovefromPlaylistRequest, (state) => {
            state.loading = true;
        })
        .addCase(RemovefromPlaylistSuccess, (state, action) => {
            state.loading = false;
            state.message = action.payload.message;
            state.courses = action.payload;
        })
        .addCase(RemovefromPlaylistFail, (state, action) => {
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

export default profileReducer;