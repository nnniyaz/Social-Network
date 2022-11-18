import React, {useContext} from 'react';
import {Context} from "../index";
import {Navigate, Outlet} from "react-router-dom";

function CheckAuth({children}: { children?: React.ReactNode }) {
    const {store} = useContext(Context);

    if (store.isAuth) {
        return (
            <>
                <Navigate to={'/'} replace/>
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