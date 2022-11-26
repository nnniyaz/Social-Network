import React, {useContext, useEffect} from 'react';
import {Context} from "../index";
import {Navigate, Outlet, useLocation, useNavigate} from "react-router-dom";
import {observer} from "mobx-react-lite";

function RequireAuth({children}: { children?: React.ReactNode }) {
    const location = useLocation();
    const {store} = useContext(Context);

    if (!store.isAuth) {
        return (
            <Navigate to={'/login'} state={{from: location}} />
        )
    }

    return (
        <>
            {children ? children : <Outlet/>}
        </>
    )
}

export default RequireAuth;