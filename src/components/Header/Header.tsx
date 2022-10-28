import { NavLink } from 'react-router-dom';
import classes from './Header.module.scss';

const setActive = ({ isActive }: any) => isActive ? classes.nav__item__active : classes.nav__item

const Header = () => {
    return (
        <div className={classes.header}>
            <div className={classes.title}>BLOG</div>
            <div className={classes.nav}>
                <NavLink to={'/'} className={setActive} end>Feed</NavLink>
                <NavLink to={'profile'} className={setActive}>Profile</NavLink>
                <NavLink to={'settings'} className={setActive}>Settings</NavLink>
                <NavLink to={'logout'} className={setActive}>Logout</NavLink>
            </div>
        </div>
    );
}

export default Header;