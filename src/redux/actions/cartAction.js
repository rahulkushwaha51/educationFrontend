import axios from "axios";
import { server } from '../store'

export const addToCart = (courseId) => async (dispatch) => {
    try {
        dispatch({ type: "addToCartRequest" });
        const { data } = await axios.post(
            `${server}/addtocart`,{courseId},
            {
                headers: {
                    "Content-Type": "application/json",
                },
                withCredentials: true,
            }
        );


        dispatch({ type: "addToCartSuccess", payload: data });


    } catch (error) {
        dispatch({ type: "addToCartFailure", payload:error.response.data.message });
    }
};
export const removeFromCart = (courseId) => async (dispatch) => {
    try {
        dispatch({ type: "removeFromCartRequest" });
        const { data } = await axios.post(
            `${server}/removefromcart`,{ courseId},
            {
                headers: {
                    "Content-Type": "application/json",
                },
                withCredentials: true,
            }
        );

     
        dispatch({ type: "removeFromCartSuccess", payload: data });
    } catch (error) {
        // console.log(error.response.data.message )
        dispatch({ type: "removeFromCartFail", payload:error.response.data.message  });
    }
};

export const getCart = () => async (dispatch) => {
    try {
        dispatch({ type: "getCartRequest" });
        const { data } = await axios.get(
            `${server}/cart`,
            {
                headers: {
                    "Content-Type": "application/json",
                },
                withCredentials: true,
            }
        );
        dispatch({ type: "getCartSuccess", payload: data });

    }
    catch (error) {
        dispatch({ type: "getCartFailure", payload: error.response.data.message });
    }
}

export const clearCart = (courseId) => async (dispatch) => {
    try {
        dispatch({ type: "clearCartRequest" });
        const { data } = await axios.post(
            `${server}/clearcart`,{courseId},
            {
                headers: {
                    "Content-Type": "application/json",
                },
                withCredentials: true,
            }
        );
        dispatch({ type: "clearCartSuccess", payload: data });

    }
    catch (error) {
        dispatch({ type: "clearCartFailure", payload: error.response.data.message });
    }
}

export const placeOrder =() => async (dispatch) => {
    try {
        dispatch({ type: "placeOrderRequest" });
        const { data } = await axios.get(
            `${server}/order`,
            {
                headers: {
                    "Content-Type": "application/json",
                },
                withCredentials: true,
            }
        );
        dispatch({ type: "placeOrderSuccess", payload: data });

    }
    catch (error) {
        dispatch({ type: "placeOrderFailure", payload: error.response.data.message  });
    }
}

export const checkout=  (amount) => async (dispatch)=>{  
    try {
        dispatch({ type: "checkoutRequest" });
        const { data } = await axios.post(
            `${server}/checkout`,{amount},
            {
                headers: {
                    "Content-Type": "application/json",
                },
                withCredentials: true,
            }
        );
        dispatch({ type: "checkoutSuccess", payload: data });

    }
    catch (error) {
        dispatch({ type: "checkoutFailure", payload: error.response.data.message });
    }
}
    