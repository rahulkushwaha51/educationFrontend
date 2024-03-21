import React, { useEffect } from 'react'
import { Outlet } from 'react-router'
import Navbar from './component/navbar/Navbar'

import { toast, Toaster } from "react-hot-toast";
import { useDispatch, useSelector } from 'react-redux';
import { getMyProfile } from './redux/actions/userAction';
import Footer from './component/Footer/Footer'
const Layout = () => {

    const dispatch = useDispatch();

    const { isAuthenticated, user, message, error } = useSelector(state => state.user);
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
    useEffect(() => {

        dispatch(getMyProfile)

    }, [dispatch]);
    return (
        <div>
            <Navbar isAuthenticated={isAuthenticated} user={user} />
           
            <Toaster />
            <Outlet />
            <Footer/>
        </div>
    )
}

export default Layout
