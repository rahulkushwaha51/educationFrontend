/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  checkout,
  clearCart,
  getCart,
  placeOrder,
  removeFromCart,
} from "../../redux/actions/cartAction";
import "./Cart.css";
import toast from "react-hot-toast";
import { server } from "../../redux/store";
import { useState } from "react";
import axios from "axios";

const Cart = () => {
  const [key, setKey] = useState("");
  const { cart, order, message, error } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const handleCheckout = async (e, amount) => {
    e.preventDefault();
    dispatch(checkout(amount));
    const { data } = await axios.get(`${server}/razorpaykey`);
    setKey(data.key);
    const options = {
      key,
      amount: amount,
      currency: "INR",
      name: "GS Academy",
      description: "GS Academy Course Purchase",
      order_id: order.id,
      callback_url: `${server}/paymentvalidation`,
      prefill: {
        name: user.name,
        email: user.email,
        contact: "6447444467",
      },
      theme: {
        color: "#3399cc",
      },
    };
    const razor = new window.Razorpay(options);
    razor.open();
  };

  const addToCartHandler = (e, courseId) => {
    e.preventDefault();
    dispatch(addToCart(courseId));
  };

  const removeFromCartHandler = (e, courseId) => {
    e.preventDefault();
    dispatch(removeFromCart(courseId));
  };
  const clearCartHandler = (courseId) => {
    dispatch(clearCart(courseId));
  };
  useEffect(() => {
    dispatch(getCart());
    if (message) {
      toast.success(message);
      dispatch({ type: "clearMessage" });
    }
    if (error) {
      toast.error(error);
      dispatch({ type: "clearError" });
    }
  }, [dispatch, message, error]);

  useEffect(() => {
    dispatch(getCart());
  }, [dispatch]);

  return (
    <div className="cart-container">
      <h1 className="cart-heading">Your Cart</h1>

      {cart && cart !== null ? (
        <div className="cart-summary">
          <h3>Cart Summary</h3>

          <table className="cart-table">
            <thead>
              <tr>
                <th className="heading-item">Image</th>
                <th className="heading-item">Course</th>
                <th className="heading-item">Course-Price</th>
                <th className="heading-item">Quantity</th>
                <th className="heading-item">Total</th>
                <th className="heading-item">Remove</th>
              </tr>
            </thead>
            <tbody>
              {cart.items.map((item) => (
                <tr key={item._id} className="cart-item">
                  <td className="col-item">
                    {" "}
                    <img src={item.image} alt="course" />{" "}
                  </td>
                  <td className="col-item">{item.title}</td>
                  <td className="col-item">₹{item.price}</td>
                  <td className="col-item">
                    <div className="quantity-container">
                      <button
                        className="btn-primary"
                        onClick={(e) => removeFromCartHandler(e, item.courseId)}
                      >
                        -
                      </button>
                      <strong> {item.quantity}</strong>
                      <button
                        className="btn-primary"
                        onClick={(e) => addToCartHandler(e, item.courseId)}
                      >
                        +
                      </button>
                    </div>
                  </td>
                  <td className="col-item">₹{item.price * item.quantity}</td>
                  <td className="col-item">
                    <button
                      className="btn-primary"
                      onClick={() => clearCartHandler(item.courseId)}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
              <tr className="cart-total">
                <td colSpan={3}></td>
                <td className="center"> Total </td>
                <td className="border-right"> ₹{cart.price}</td>
                <td></td>
              </tr>
            </tbody>
          </table>
          <button
            className="btn-primary cart-button"
            onClick={(e) => handleCheckout(e, cart.price)}
          >
            Checkout
          </button>
        </div>
      ) : (
        <h2>Cart is Empty</h2>
      )}
    </div>
  );
};
export default Cart;
