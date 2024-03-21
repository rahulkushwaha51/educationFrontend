import axios from "axios";
import {server} from '../store'
export const buySubscription = () => async (dispatch) => {
    try {
        dispatch({ type: "buysubscriptionRequest" });
        const { data } = await axios.get(
            `${server}/subscribe`,

            { withCredentials: true, }

        );
        dispatch({ type: "buysubscriptionSuccess", payload: data});
    } catch (error) {
        dispatch({ type: "buysubscriptionFail", payload: error.response.data.message });

    }
};
export const cancelSubscription = () => async (dispatch) => {
    try {
        dispatch({ type: "cancelsubscriptionRequest" });
        const { data } = await axios.delete(
            `${server}/subscribe/cancel`,
            { withCredentials: true, }

        );
        dispatch({ type: "cancelsubscriptionSuccess", payload: data.message});
    } catch (error) {
        dispatch({ type: "cancelsubscriptionFail", payload: error.response.data.message });
    }
};