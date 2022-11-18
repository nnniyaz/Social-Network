import React, {useContext, useEffect} from 'react';
import {Context} from "../index";
import {Navigate, Outlet, useNavigate} from "react-router-dom";
import {observer} from "mobx-react-lite";

function RequireAuth({children}: { children?: React.ReactNode }) {
    const {store} = useContext(Context);

    if (!store.isAuth) {
        return (
            <Navigate to={'/login'} replace />
        )
    }

    return (
        <>
            {children ? children : <Outlet/>}
        </>
    )
}

export default RequireAuth;