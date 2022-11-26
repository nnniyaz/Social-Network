import React, {useContext} from 'react';
import {Context} from "../index";
import {Navigate, Outlet, useLocation} from "react-router-dom";

function CheckAuth({children}: { children?: React.ReactNode }) {
    const location = useLocation();
    const {store} = useContext(Context);
    const fromPage = location.state?.from?.pathname || '/';

    if (store.isAuth) {
        return (
            <>
                <Navigate to={fromPage} replace/>
            </>
        )
    }

    return (
        <>
            {children ? children : <Outlet/>}
        </>
    );
}

export default CheckAuth;