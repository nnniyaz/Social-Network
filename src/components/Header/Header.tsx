import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import classes from './Header.module.scss';

const setActive = ({ isActive }: any) => isActive ? classes.nav__item__active : classes.nav__item

const Header = () => {
    const navigate = useNavigate();
    const logout = () => {
        navigate('/login');
    }

    const location = useLocation();

    return (
        <div className={classes.header}>
            <div className={classes.title}>BLOG</div>
            {
                location.pathname !== '/login' && location.pathname !== '/signup' ? (
                    <div className={classes.nav}>
                        <NavLink to={'/'} className={setActive} end>Feed</NavLink>
                        <NavLink to={'profile'} className={setActive}>Profile</NavLink>
                        <NavLink to={'settings'} className={setActive}>Settings</NavLink>
                        <div className={classes.nav__item} onClick={() => logout()}>Logout</div>
                    </div>
                ) : (
                    <div className={classes.nav}>
                        <NavLink to={'/login'} className={setActive} end>Login</NavLink>
                        <NavLink to={'signup'} className={setActive}>Sign Up</NavLink>
                    </div>
                )
            }
        </div >
    );
}

export default Header;