import axios from "axios";

import {server} from '../store'

export const getadminstats = () => async (dispatch) => {
    try {
        dispatch({ type: "getadminstatsRequest" });
        const { data } = await axios.get(
            `${server}/admin/stats`,
            { withCredentials: true }
        );

        dispatch({ type: "getadminstatsSuccess", payload:data});
    } catch (error) {
        dispatch({ type: "getadminstatsFail", payload: error.response.data.message });
    }
};
export const getallusers = () => async (dispatch) => {
    try {
        dispatch({ type: "getallusersRequest" });
        const { data } = await axios.get(
            `${server}/users`,
            { withCredentials: true }
        );


        dispatch({ type: "getallusersSuccess", payload:data.users});


    } catch (error) {
        dispatch({ type: "getallusersFail", payload: error.response.data.message });
    }
};

export const updateuserRole = (id) => async (dispatch) => {
    try {
        dispatch({ type: "updateuserRoleRequest" });
        const { data } = await axios.patch(
            `${server}/admin/user/${id}`,{},
            { withCredentials: true }
        );


        dispatch({ type: "updateuserRoleSuccess", payload:data.message});


    } catch (error) {
        dispatch({ type: "updateuserRoleFail", payload: error.response.data.message });
    }
};

export const deleteuser = (id) => async (dispatch) => {
    try {
        dispatch({ type: "deleteuserRequest" });
        const { data } = await axios.delete(
            `${server}/admin/user/${id}`,
            { withCredentials: true }
        );


        dispatch({ type: "deleteuserSuccess", payload:data.message});


    } catch (error) {
        dispatch({ type: "deleteuserFail", payload: error.response.data.message });
    }
};
export const createCourse = (formdata) => async (dispatch) => {
    try {

        dispatch({ type: "createcourseRequest" });
        const { data } = await axios.post(
            `${server}/createcourse`,
            formdata
            , {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
                withCredentials: true,
            }
        );
        dispatch({ type: "createcourseSuccess", payload: data.message });


    } catch (error) {
        dispatch({ type: "createcourseFail", payload: error.response.data.message });
    }
};
export const addLecture = (id, formdata) => async (dispatch) => {
    try {

        dispatch({ type: "addLectureRequest" });
        const { data } = await axios.post(
            `${server}/lecture/${id}`,
            formdata
            , {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
                withCredentials: true,
            }
        );
        dispatch({ type: "addLectureSuccess", payload: data.message });


    } catch (error) {
        dispatch({ type: "addLectureFail", payload: error.response.data.message });
    }
};
export const deleteLecture = (courseId, lectureId) => async (dispatch) => {
    try {

        dispatch({ type: "deleteLectureRequest" });
        const { data } = await axios.delete(
            `${server}/lecture?courseId=${courseId}&lectureId=${lectureId}`,
            {
                withCredentials: true,
            }
        );
        dispatch({ type: "deleteLectureSuccess", payload: data.message });


    } catch (error) {
        dispatch({ type: "deleteLectureFail", payload: error.response.data.message });
    }
};
export const deleteCourse = (id) => async (dispatch) => {
    try {

        dispatch({ type: "deletecourseRequest" });
        const { data } = await axios.delete(
            `${server}/course/${id}`,
            {
                withCredentials: true,
            }
        );
        dispatch({ type: "deletecourseSuccess", payload: data.message });


    } catch (error) {
        dispatch({ type: "deletecourseFail", payload: error.response.data.message });
    }
};