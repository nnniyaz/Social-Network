import React, {useContext, useEffect} from 'react';
import {Context} from "../index";
import {Outlet, useNavigate} from "react-router-dom";
import {observer} from "mobx-react-lite";

function RequireAuth() {
    const naviagte = useNavigate();
    const {store} = useContext(Context);

    return (
        <>
            {store.isAuth ? <Outlet/> : naviagte('/login')}
        </>
    );
}

export default observer(RequireAuth);