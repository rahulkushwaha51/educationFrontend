import axios from "axios";

import {server} from '../store'
export const updateprofile = (name, email) => async (dispatch) => {
    try {
        dispatch({ type: "updateprofileRequest" });
        const { data } = await axios.patch(
            `${server}/updateprofile`,
            { name, email },
            {
                headers: {
                    "Content-Type": "application/json",
                },
                withCredentials: true,
            }
        );
        dispatch({ type: "updateprofileSuccess", payload: data.message });
    } catch (error) {
        dispatch({ type: "updateprofileFail", payload: error.response.data.message });
    }
};
export const updateprofilepicture = (formdata) => async (dispatch) => {
    try {
        dispatch({ type: "updateprofilepictureRequest" });
        const {data} = await axios.patch(
            `${server}/updatepicture`,
             formdata ,
            {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
                withCredentials: true,
            }
        );
        dispatch({ type: "updateprofilepictureSuccess", payload: data.message });
    } catch (error) {
        dispatch({ type: "updateprofilepictureFail", payload: error.response.data.message });


    }
};
export const forgetPassword = (email) => async (dispatch) => {
    try {
        dispatch({ type: "forgetpasswordRequest" });
        const {data} = await axios.post(
            `${server}/forgetpassword`,
            { email },
            {
                headers: {
                    "Content-Type": "application/json",
                },
                withCredentials: true,
            }
        );
        dispatch({ type: "forgetpasswordSuccess", payload: data.message });
    } catch (error) {
        dispatch({ type: "forgetpasswordFail", payload: error.response.data.message });

    }
};
export const resetPassword = (token, password) => async (dispatch) => {
    try {

        console.log(token)
        dispatch({ type: "resetpasswordRequest" });
        const {data} = await axios.patch(
            `${server}/resetpassword/${token}`,
            { password },
            {
                headers: {
                    "Content-Type": "application/json",
                },
                withCredentials: true,
            }
        );
        dispatch({ type: "resetpasswordSuccess", payload: data.message });
        return response.data;
    } catch (error) {
        dispatch({ type: "resetpasswordFail", payload: error.response.data.message });

        // Return an error object or null to indicate login failure
        return { error: error.response.data.message };
    }
};
export const changePassword = (oldPassword, newPassword) => async (dispatch) => {
    try {
        dispatch({ type: "changepasswordRequest" });
        const { data } = await axios.patch(
            `${server}/changepassword`,
            { oldPassword, newPassword },
            {
                headers: {
                    "Content-Type": "application/json",
                },
                withCredentials: true,
            }
        );
        dispatch({ type: "changepasswordSuccess", payload: data.message });
    } catch (error) {
        dispatch({ type: "changepasswordFail", payload: error.response.data.message });
    }
};

export const AddToPlaylist = (id) => async (dispatch) => {
    try {
        dispatch({ type: "AddToPlaylistRequest" });
        const {data} = await axios.post(
            `${server}/addtoplaylist`,
            { id },
            {
                headers: {

                    'Content-Type': 'application/json',
                },
                withCredentials: true,
            },
        );
        dispatch({ type: "AddToPlaylistSuccess", payload: data });

    
    } catch (error) {
        dispatch({ type: "AddToPlaylistFail", payload: error.response.data.message });

    }
};
export const RemovefromPlaylist = (id) => async (dispatch) => {
    try {
        dispatch({ type: " RemovefromPlaylistRequest" });
        const {data} = await axios.delete(
            `${server}/removefromplaylist?id=${id}`,
            {
                withCredentials: true,
            }
        );
        dispatch({ type: " RemovefromPlaylistSuccess", payload: data });

       
       
    } catch (error) {
        dispatch({ type: " RemovefromPlaylistFail", payload: error.response.datamessage });
    }
};