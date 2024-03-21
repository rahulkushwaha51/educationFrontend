import React, { useEffect, useState } from 'react';

import './resetPassword.css';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { resetPassword } from '../../redux/actions/profileAction';
import toast from 'react-hot-toast';


const ResetPassword = (token) => {
    const [password, setpassword] = useState('');

    const { message, error } = useSelector(state => state.profile)
    const params = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleChange = (e) => {
        setpassword(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch(resetPassword(params.token, password))
        navigate('/login')
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
        <div className="reset-password-container">
            <form onSubmit={handleSubmit} className="reset-password-form">
                <h2>Reset Password</h2>
                <p>
                    Enter your Newpassword to reset your password.
                </p>
                <input
                    type="password"
                    name="password"
                    placeholder="New Password"
                    value={password}
                    onChange={handleChange}
                />
                <button type="submit">Reset Password</button>
            </form>
        </div>
    );
};

export default ResetPassword;
