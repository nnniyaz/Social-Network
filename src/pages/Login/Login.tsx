import React, {useContext, useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import classes from './Login.module.scss';
import {Context} from "../../index";
import {observer} from "mobx-react-lite";

const Login = () => {
    const navigate = useNavigate();
    const [data, setData] = useState({email: '', password: '',});
    const {store} = useContext(Context);


    const login = (e: React.FormEvent) => {
        e.preventDefault();
        store.login(data.email, data.password).then(() => {
            navigate('/');
        }).catch((error) => {
            console.log(error);
        });
    }

    return (
        <div className={classes.main}>
            <div className={classes.main__container}>
                <div className={classes.title}>Login</div>
                <form onSubmit={(e) => login(e)}>
                    <input
                        value={data.email}
                        onChange={(e) => setData({ ...data, email: e.target.value })}
                        className={classes.input}
                        type="email"
                        placeholder="Email"
                        required
                    />
                    <input
                        value={data.password}
                        onChange={(e) => setData({ ...data, password: e.target.value })}
                        className={classes.input}
                        type="password"
                        placeholder="Password"
                        minLength={3}
                        maxLength={32}
                        autoComplete="on"
                        required
                    />
                    <button className={classes.button}>
                        Login
                    </button>
                </form>
                <div className={classes.text}>
                    Don't have an account? <Link to="/signup" className={classes.link}>Register</Link>
                </div>
            </div>
        </div>
    );
}

export default observer(Login);