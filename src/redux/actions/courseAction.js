import axios from "axios";

import { server } from '../store'
export const getAllCourses = (category='',keyword='', price, ratings) => async (dispatch) => {
    try {
        dispatch({ type: "AllcoursesRequest" });
        const { data } = await axios.get(
            `${server}/courses?category=${category}&keyword=${keyword}&price=${price}&rating=${ratings}`,
            // `${server}/courses?category=${category}`,
        );
        dispatch({ type: "AllcoursesSuccess", payload: data.courses });


    } catch (error) {
        dispatch({ type: "AllcoursesFail", payload: error.response.data.message });
    }
};
export const getTop3Courses = () => async (dispatch) => {
    try {
        dispatch({ type: "Top3CoursesRequest" });
        const { data } = await axios.get(
            `${server}/top3`,
        );
       await dispatch({ type: "Top3CoursesSuccess", payload: data.top3Course });


    } catch (error) {
        dispatch({ type: "Top3CoursesFail", payload: error.data.message });
    }
};
export const getCourse = (id) => async (dispatch) => {
    try {
        dispatch({ type: "getcourseRequest" });
        const { data } = await axios.get(
            `${server}/course/${id}`, { withCredentials: true }
        );
        dispatch({ type: "getcourseSuccess", payload: data.course });


    } catch (error) {
        dispatch({ type: "getcourseFail", payload: error.response.data.message });
    }
};

export const getLecture = (id) => async (dispatch) => {
    try {
        dispatch({ type: "getlectureRequest" });
        const { data } = await axios.get(
            `${server}/lecture/${id}`, { withCredentials: true }
        );
        dispatch({ type: "getlectureSuccess", payload: data.lectures });


    } catch (error) {
        dispatch({ type: "getlectureFail", payload: error.response.data.message });
    }
};
