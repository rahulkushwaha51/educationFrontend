import { createReducer } from "@reduxjs/toolkit";

const AllcoursesRequest = 'AllcoursesRequest';
const AllcoursesSuccess = 'AllcoursesSuccess';
const AllcoursesFail = 'AllcoursesFail';
const Top3CoursesRequest = 'Top3CoursesRequest';
const Top3CoursesSuccess = 'Top3CoursesSuccess';
const Top3CoursesFail = 'Top3CoursesFail';
const getcourseRequest = 'getcourseRequest';
const getcourseSuccess = 'getcourseSuccess';
const getcourseFail = 'getcourseFail';

const getlectureRequest = 'getlectureRequest';
const getlectureSuccess = 'getlectureSuccess';
const getlectureFail = 'getlectureFail';

const AddToPlaylistRequest = 'AddToPlaylistRequest';
const AddToPlaylistSuccess = 'AddToPlaylistSuccess';
const AddToPlaylistFail = 'AddToPlaylistFail';

const clearError = 'clearError';
const clearMessage = 'clearMessage';

const courseReducer = createReducer({ courses: [], lectures: [] }, (builder) => {
    builder
        .addCase(AllcoursesRequest, (state) => {
            state.loading = true;
        })
        .addCase(AllcoursesSuccess, (state, action) => {
            state.loading = false;
            state.message = action.payload.message;
            state.courses = action.payload;
        })
        .addCase(AllcoursesFail, (state, action) => {
            state.loading = false;
            state.error = action.payload; // Access payload directly
        })
        .addCase(Top3CoursesRequest, (state) => {
            state.loading = true;
        })
        .addCase(Top3CoursesSuccess, (state, action) => {
            state.loading = false;
            state.message = action.payload.message;
            state.top3courses = action.payload;
        })
        .addCase(Top3CoursesFail, (state, action) => {
            state.loading = false;
            state.error = action.payload; // Access payload directly
        })
        .addCase(getcourseRequest, (state) => {
            state.loading = true;
        })
        .addCase(getcourseSuccess, (state, action) => {
            state.loading = false;
            state.message = action.payload.message;
            state.course = action.payload;
        })
        .addCase(getcourseFail, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
        .addCase(getlectureRequest, (state) => {
            state.loading = true;
        })
        .addCase(getlectureSuccess, (state, action) => {
            state.loading = false;
            state.lectures = action.payload;
        })
        .addCase(getlectureFail, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
        .addCase(AddToPlaylistRequest, (state) => {
            state.loading = true;
        })
        .addCase(AddToPlaylistSuccess, (state, action) => {
            state.loading = false;
            state.message = action.payload.message;
            state.courses = action.payload;
        })
        .addCase(AddToPlaylistFail, (state, action) => {
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

export default courseReducer;