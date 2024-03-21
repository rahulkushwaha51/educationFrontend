import React, { useState, useEffect } from 'react';

import './ForgetPassword.css';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { forgetPassword } from '../../redux/actions/profileAction';
import toast from 'react-hot-toast';


const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const dispatch = useDispatch();

    const { loading, message, error } = useSelector(state => state.profile)

    const handleChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch(forgetPassword(email))

    };

    useEffect(() => {

        if (error) {
            toast.error(error);
            dispatch({ type: 'clearError' })
        }
        if (message) {
            toast.success(message);
            dispatch({ type: 'clearMessage' })
        }


    }, [dispatch, error, message]);

    return (
        <div className="forgot-password-container">
            <form onSubmit={handleSubmit} className="forgot-password-form">
                <h2>Forgot Password</h2>
                <p>
                    Enter your email address to reset your password.
                </p>
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={email}
                    onChange={handleChange}
                />
                <button isLoading={loading} type="submit">Forget Password</button>
                <p>
                    Remember your password? <Link to="/login">Login </Link> here
                </p>
            </form>
        </div>
    );
};

export default ForgotPassword;
