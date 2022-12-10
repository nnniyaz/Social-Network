import { NavLink, useLocation } from 'react-router-dom';
import classes from './MobileNav.module.scss';
import {Context} from "../../index";
import {useContext} from "react";
import {ReactComponent as GlobeIcon} from "../../assets/icons/globe-alt.svg";
import {ReactComponent as UserIcon} from "../../assets/icons/user-circle.svg";
import {ReactComponent as SettingsIcon} from "../../assets/icons/view-list.svg";

const setActive = ({ isActive }: any) => isActive ? classes.nav__item__active : classes.nav__item

const MobileNav = () => {
    const location = useLocation();
    const {store} = useContext(Context);

    return (
        <>
            {
                (location.pathname !== '/login' && location.pathname !== '/signup') ? (
                    <div className={classes.mobilenav}>
                        <NavLink to={'/'} className={setActive} end>
                            <GlobeIcon width={"35"} height={"35"} fill={location.pathname === '/' ? 'white' : 'black'}/>
                        </NavLink>
                        <NavLink to={`profile/${store.user.id}`} className={setActive}>
                            <UserIcon width={"35"} height={"35"} fill={location.pathname === 'profile' ? 'white' : 'black'}/>
                        </NavLink>
                        <NavLink to={'settings'} className={setActive}>
                            <SettingsIcon width={"35"} height={"35"} fill={location.pathname === 'settings' ? 'white' : 'black'}/>
                        </NavLink>
                    </div>
                ) : (
                    <div className={classes.mobilenav} style={{ padding: '0' }}>
                        <NavLink to={'signup'} className={setActive} style={{
                            borderRadius: '0', width: '50%', height: '70px'
                        }}>Sign Up</NavLink>
                        <NavLink to={'login'} className={setActive} style={{
                            borderRadius: '0', width: '50%', height: '70px'
                        }}>Login</NavLink>
                    </div>
                )
            }
        </>
    );
}

export default MobileNav;