import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Select from 'react-select';
import classes from './Registration.module.scss';
import { cities as citiesList } from 'countriesWithCities';

interface UserData {
    firstName: string,
    lastName: string,
    country: string,
    city: string,
    email: string,
    password: string,
    confirmPassword: string,
}

const Registration = () => {
    const navigate = useNavigate();
    const [isValid, setIsValid] = useState(true);
    const [errors, setErrors] = useState({
        country: false,
        city: false,
        password: false,
    });
    const [focusedCountry, setFocusedCountry] = useState<boolean>(false);
    const [focusedCity, setFocusedCity] = useState<boolean>(false);
    const [data, setData] = useState<UserData>({
        firstName: '',
        lastName: '',
        country: 'Afghanistan',
        city: 'Herat',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const cities: { [key: string]: string[] } = citiesList;

    const signup = (e: React.FormEvent) => {
        // navigate('/');
        e.preventDefault();

        if (!isValid) {
            setErrors({
                country: data.country === '' ? true : false,
                city: data.city === '' ? true : false,
                password: data.password !== data.confirmPassword ? true : false,
            });
            return;
        }
        console.log(data)
    }

    useEffect(() => {
        setIsValid((data.country && data.city && (data.password === data.confirmPassword)) ? true : false);
    }, [data]);

    return (
        <div className={classes.main}>
            <div className={classes.main__container}>
                <div className={classes.title}>Sign Up</div>
                <form onSubmit={(e) => signup(e)}>
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
                        <div style={{ width: '48%' }}>
                            <Select
                                onChange={(e) => {
                                    if (e) {
                                        setData({ ...data, country: e.value, city: cities[e.value][0] })
                                    }
                                }}
                                value={{ value: data.country ? data.country : Object.keys(cities)[0], label: data.country ? data.country : Object.keys(cities)[0] }}
                                options={Object.keys(cities).map((country) => ({ value: country, label: country }))}
                                placeholder="Country"
                                styles={{
                                    control: (provided, state) => ({
                                        ...provided,
                                        height: '43.5px',
                                        backgroundColor: state.isFocused ? 'black' : 'transparent',
                                        border: `2px solid ${errors.country ? '#ff2a2a' : 'black'}`,
                                        borderRadius: '20px',
                                        padding: '0 10px',
                                        color: 'white',
                                        transition: '.1s linear',
                                    }),
                                    menu: (provided, state) => ({
                                        ...provided,
                                        backgroundColor: 'black',
                                    }),
                                    option: (provided, state) => ({
                                        ...provided,
                                        color: state.isFocused ? 'black' : 'white',
                                    }),
                                    singleValue: (provided, state) => ({
                                        ...provided,
                                        color: focusedCountry ? 'white' : 'black',
                                    }),
                                    input: (provided, state) => ({
                                        ...provided,
                                        color: focusedCountry ? 'white' : 'black',
                                    })

                                }}
                                onFocus={() => setFocusedCountry(true)}
                                onBlur={() => setFocusedCountry(false)}
                            />
                        </div>
                        <div style={{ width: '48%', marginBottom: '20px', cursor: !data.country ? 'not-allowed' : 'pointer', }}>
                            <Select
                                onChange={(e) => {
                                    if (e) {
                                        setData({ ...data, city: e.value })
                                    }
                                }}
                                value={{ value: data.city ? data.city : cities[Object.keys(cities)[0]][0], label: data.city ? data.city : cities[Object.keys(cities)[0]][0] }}
                                options={data.country ? cities[Object.keys(cities)[0]].map((city: string) => ({ value: city, label: city })) : []}
                                placeholder="City"
                                styles={{
                                    control: (provided, state) => ({
                                        ...provided,
                                        height: '43.5px',
                                        backgroundColor: state.isFocused ? 'black' : 'transparent',
                                        border: `2px solid ${errors.city ? '#ff2a2a' : 'black'}`,
                                        borderRadius: '20px',
                                        padding: '0 10px',
                                        color: 'white',
                                        transition: '.1s linear',
                                    }),
                                    menu: (provided, state) => ({
                                        ...provided,
                                        backgroundColor: 'black',
                                    }),
                                    option: (provided, state) => ({
                                        ...provided,
                                        color: state.isFocused ? 'black' : 'white',
                                    }),
                                    singleValue: (provided, state) => ({
                                        ...provided,
                                        color: focusedCity ? 'white' : 'black',
                                    }),
                                    input: (provided, state) => ({
                                        ...provided,
                                        color: focusedCity ? 'white' : 'black',
                                    })

                                }}
                                onFocus={() => setFocusedCity(true)}
                                onBlur={() => setFocusedCity(false)}
                                isDisabled={!data.country}
                            />
                        </div>
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
                        style={{
                            borderColor: errors.password ? '#ff2a2a' : 'black'
                        }}
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
                        style={{
                            borderColor: errors.password ? '#ff2a2a' : 'black'
                        }}
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