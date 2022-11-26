import { NavLink, useLocation } from 'react-router-dom';
import classes from './MobileNav.module.scss';
import {Context} from "../../index";
import {useContext} from "react";

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
                            <svg fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9.25498 14.0045C10.2215 14.0045 11.005 14.788 11.005 15.7545V19.2535C11.005 20.2199 10.2215 21.0035 9.25498 21.0035H3.75C2.7835 21.0035 2 20.2199 2 19.2535V15.7545C2 14.788 2.7835 14.0045 3.75 14.0045H9.25498ZM20.25 14.0045C21.2165 14.0045 22 14.788 22 15.7545V19.2535C22 20.2199 21.2165 21.0035 20.25 21.0035H14.745C13.7785 21.0035 12.995 20.2199 12.995 19.2535V15.7545C12.995 14.788 13.7785 14.0045 14.745 14.0045H20.25ZM9.25498 15.5045H3.75C3.61193 15.5045 3.5 15.6165 3.5 15.7545V19.2535C3.5 19.3915 3.61193 19.5035 3.75 19.5035H9.25498C9.39306 19.5035 9.50498 19.3915 9.50498 19.2535V15.7545C9.50498 15.6165 9.39306 15.5045 9.25498 15.5045ZM20.25 15.5045H14.745C14.6069 15.5045 14.495 15.6165 14.495 15.7545V19.2535C14.495 19.3915 14.6069 19.5035 14.745 19.5035H20.25C20.3881 19.5035 20.5 19.3915 20.5 19.2535V15.7545C20.5 15.6165 20.3881 15.5045 20.25 15.5045ZM20.25 3C21.2165 3 22 3.7835 22 4.75V10.25C22 11.2165 21.2165 12 20.25 12H3.75C2.7835 12 2 11.2165 2 10.25V4.75C2 3.83183 2.70711 3.07881 3.60647 3.0058L3.75 3H20.25ZM20.25 4.5H3.75L3.69268 4.5066C3.58223 4.53251 3.5 4.63165 3.5 4.75V10.25C3.5 10.3881 3.61193 10.5 3.75 10.5H20.25C20.3881 10.5 20.5 10.3881 20.5 10.25V4.75C20.5 4.61193 20.3881 4.5 20.25 4.5Z" fill={`${'/' === location.pathname ? 'white' : 'black'}`} /></svg>
                        </NavLink>
                        <NavLink to={`profile/${store.user.id}`} className={setActive}>
                            <svg viewBox="0 0 448 512" width='24px' height='24px' xmlns="http://www.w3.org/2000/svg"><path d="M272 304h-96C78.8 304 0 382.8 0 480c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32C448 382.8 369.2 304 272 304zM48.99 464C56.89 400.9 110.8 352 176 352h96c65.16 0 119.1 48.95 127 112H48.99zM224 256c70.69 0 128-57.31 128-128c0-70.69-57.31-128-128-128S96 57.31 96 128C96 198.7 153.3 256 224 256zM224 48c44.11 0 80 35.89 80 80c0 44.11-35.89 80-80 80S144 172.1 144 128C144 83.89 179.9 48 224 48z" fill={`${`/profile/${store.user.id}` == location.pathname ? 'white' : 'black'}`} /></svg>
                        </NavLink>
                        <NavLink to={'settings'} className={setActive}>
                            <svg fill="none" height="28" viewBox="0 0 28 28" width="28" xmlns="http://www.w3.org/2000/svg"><path d="M3 7C3 6.44771 3.44772 6 4 6H24C24.5523 6 25 6.44771 25 7C25 7.55229 24.5523 8 24 8H4C3.44772 8 3 7.55229 3 7Z" fill={`${'/settings' === location.pathname ? 'white' : 'black'}`} /><path d="M3 14C3 13.4477 3.44772 13 4 13H24C24.5523 13 25 13.4477 25 14C25 14.5523 24.5523 15 24 15H4C3.44772 15 3 14.5523 3 14Z" fill={`${'/settings' === location.pathname ? 'white' : 'black'}`} /><path d="M4 20C3.44772 20 3 20.4477 3 21C3 21.5523 3.44772 22 4 22H24C24.5523 22 25 21.5523 25 21C25 20.4477 24.5523 20 24 20H4Z" fill={`${'/settings' === location.pathname ? 'white' : 'black'}`} /></svg>
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