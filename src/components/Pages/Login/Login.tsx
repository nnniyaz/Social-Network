import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import classes from './Login.module.scss';

const Login = () => {
    const navigate = useNavigate();
    const [data, setData] = useState({
        email: '',
        password: '',
    });

    const login = () => {
        navigate('/');
    }

    return (
        <div className={classes.main}>
            <div className={classes.main__container}>
                <div className={classes.title}>Login</div>
                <form onSubmit={() => login()}>
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
                        minLength={6}
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

export default Login;