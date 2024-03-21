import { createReducer } from "@reduxjs/toolkit";


const getadminstatsRequest = 'getadminstatsRequest';
const getadminstatsSuccess = 'getadminstatsSuccess';
const getadminstatsFail = 'getadminstatsFail';

const getallusersRequest = 'getallusersRequest';
const getallusersSuccess = 'getallusersSuccess';
const getallusersFail = 'getallusersFail';

const updateuserRoleRequest = 'updateuserRoleRequest';
const updateuserRoleSuccess = 'updateuserRoleSuccess';
const updateuserRoleFail = 'updateuserRoleFail';

const deleteuserRequest = 'deleteuserRequest';
const deleteuserSuccess = 'deleteuserSuccess';
const deleteuserFail = 'deleteuserFail';

const createcourseRequest = 'createcourseRequest';
const createcourseSuccess = 'createcourseSuccess';
const createcourseFail = 'createcourseFail';

const deletecourseRequest = 'deletecourseRequest';
const deletecourseSuccess = 'deletecourseSuccess';
const deletecourseFail = 'deletecourseFail';

const addLectureRequest = 'addLectureRequest';
const addLectureSuccess = 'addLectureSuccess';
const addLectureFail = 'addLectureFail';

const deleteLectureRequest = 'deleteLectureRequest';
const deleteLectureSuccess = 'deleteLectureSuccess';
const deleteLectureFail = 'deleteLectureFail';

const clearError = 'clearError';
const clearMessage = 'clearMessage';

 const adminReducer = createReducer({}, (builder) => {
    builder

        .addCase(getadminstatsRequest, (state) => {
            state.loading = true;
        })
        .addCase(getadminstatsSuccess, (state, action) => {
            state.loading = false;
            state.stats = action.payload.stats
            state.usersCount = action.payload.usersCount;
            state.viewsCount = action.payload.viewsCount;
            state.subscriptionCount = action.payload.subscriptionCount;
            state.subscriptionPercent = action.payload.subscriptionPercent;
            state.viewsPercent = action.payload.viewsPercent;
            state.usersPercent = action.payload.usersPercent;
            state.userProfit = action.payload.userProfit;
            state.viewsProfit = action.payload.viewsProfit;
            state.subscriptionProfit = action.payload.subscriptionProfit;
        })
        .addCase(getadminstatsFail, (state, action) => {
            state.loading = false;
            state.error = action.payload; // Access payload directly
        })

        .addCase(getallusersRequest, (state) => {
            state.loading = true;
        })
        .addCase(getallusersSuccess, (state, action) => {
            state.loading = false;
            state.users = action.payload;
        })
        .addCase(getallusersFail, (state, action) => {
            state.loading = false;
            state.error = action.payload; // Access payload directly
        })

        .addCase(updateuserRoleRequest, (state) => {
            state.loading = true;
        })
        .addCase(updateuserRoleSuccess, (state, action) => {
            state.loading = false;
            state.message = action.payload;
        })
        .addCase(updateuserRoleFail, (state, action) => {
            state.loading = false;
            state.error = action.payload; // Access payload directly
        })

        .addCase(deleteuserRequest, (state) => {
            state.loading = true;
        })
        .addCase(deleteuserSuccess, (state, action) => {
            state.loading = false;
            state.message = action.payload;
        })
        .addCase(deleteuserFail, (state, action) => {
            state.loading = false;
            state.error = action.payload; // Access payload directly
        })

        .addCase(createcourseRequest, (state) => {
            state.loading = true;
        })
        .addCase(createcourseSuccess, (state, action) => {
            state.loading = false;
            state.message = action.payload;
        })
        .addCase(createcourseFail, (state, action) => {
            state.loading = false;
            state.error = action.payload; // Access payload directly
        })
        .addCase(deletecourseRequest, (state) => {
            state.loading = true;
        })
        .addCase(deletecourseSuccess, (state, action) => {
            state.loading = false;
            state.message = action.payload;
        })
        .addCase(deletecourseFail, (state, action) => {
            state.loading = false;
            state.error = action.payload; // Access payload directly
        })

        .addCase(addLectureRequest, (state) => {
            state.loading = true;
        })
        .addCase(addLectureSuccess, (state, action) => {
            state.loading = false;
            state.message = action.payload;
        })
        .addCase(addLectureFail, (state, action) => {
            state.loading = false;
            state.error = action.payload; // Access payload directly
        })
        .addCase(deleteLectureRequest, (state) => {
            state.loading = true;
        })
        .addCase(deleteLectureSuccess, (state, action) => {
            state.loading = false;
            state.message = action.payload;
        })
        .addCase(deleteLectureFail, (state, action) => {
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

export default adminReducer;