import axios from "axios";
import {server} from '../store'

export const signup = (formData) => async (dispatch) => {
    try {
        dispatch({ type: "signUpRequest" });
        const {data} = await axios.post(
            `${server}/register`,
            formData,
            {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
                withCredentials: true,
            }
        )
        dispatch({ type: "signUpSuccess", payload: data });
    } catch (error) {
        dispatch({ type: "signUpFail", payload: error.response.data.message });

    }
};
export const login = (email, password) => async (dispatch) => {
    try {
        dispatch({ type: "loginRequest" });
        const { data } = await axios.post(
            `${server}/login`,
            { email, password },
            {
                headers: {
                    "Content-Type": "application/json",
                },
                withCredentials: true,
            }
        );
        
        dispatch({ type: "loginSuccess", payload: data });
    } catch (error) {
        console.log(error)
        dispatch({ type: "loginFail", payload: error.response.data.message });
    }
};
export const logout = () => async (dispatch) => {
    try {
        dispatch({ type: "logoutRequest" });
        const {data} = await axios.get(
            `${server}/logout`,
            {
                withCredentials: true,
            }
        );
        dispatch({ type: "logoutSuccess", payload: data.message });
    } catch (error) {
        dispatch({ type: "logoutFail", payload: error.response.data.message });
    }
};
export const getMyProfile = () => async (dispatch) => {
    try {
        dispatch({ type: "loadUserRequest" });
        const {data} = await axios.get(
            `${server}/me`,
            {
                withCredentials: true,
            }
        );
        dispatch({ type: "loadUserSuccess", payload: data.user });
    } catch (error) {
        dispatch({ type: "loadUserFail", payload: error.response.data.message });
    }
};


