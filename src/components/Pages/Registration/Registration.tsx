import { useState } from 'react';
import { Link } from 'react-router-dom';
import classes from './Registration.module.scss';

const Registration = () => {
    const [data, setData] = useState({
        firstName: '',
        lastName: '',
        country: '',
        city: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    return (
        <div className={classes.main}>
            <div className={classes.main__container}>
                <div className={classes.title}>Sign Up</div>
                <form>
                    <div className={classes.row}>
                        <input
                            value={data.firstName}
                            onChange={(e) => setData({ ...data, firstName: e.target.value })}
                            className={classes.input}
                            type="text"
                            placeholder="First Name"
                            style={{ width: '48%' }}
                            required
                        />
                        <input
                            value={data.lastName}
                            onChange={(e) => setData({ ...data, lastName: e.target.value })}
                            className={classes.input}
                            type="text"
                            placeholder="Last Name"
                            style={{ width: '48%' }}
                            required
                        />
                    </div>
                    <div className={classes.row}>
                        <input
                            value={data.country}
                            onChange={(e) => setData({ ...data, country: e.target.value })}
                            className={classes.input}
                            type="text"
                            placeholder="Country"
                            style={{ width: '48%' }}
                            required
                        />
                        <input
                            value={data.city}
                            onChange={(e) => setData({ ...data, city: e.target.value })}
                            className={classes.input}
                            type="text"
                            placeholder="City"
                            style={{ width: '48%' }}
                            required
                        />
                    </div>
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
                    <input
                        value={data.confirmPassword}
                        onChange={(e) => setData({ ...data, confirmPassword: e.target.value })}
                        className={classes.input}
                        type="password"
                        placeholder="Confirm Password"
                        minLength={6}
                        autoComplete="on"
                        required
                    />
                    <button className={classes.button}>
                        Login
                    </button>
                </form>
                <div className={classes.text}>
                    Already have an account? <Link to="/login" className={classes.link}>Login</Link>
                </div>
            </div>
        </div>
    );
}

export default Registration;