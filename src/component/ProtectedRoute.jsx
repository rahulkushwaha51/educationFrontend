import React from 'react'
import { Navigate, Outlet, useLocation } from 'react-router'


function ProtectedRoute(
    { redirectPath = '/login',
        children, }) {

    const { token } = useAuth();
    const location = useLocation();
    if (!token) {
        return <Navigate to={redirectPath} replace state={{ from: location }} />
    }
    return children || <Outlet />

}

export default ProtectedRoute;
