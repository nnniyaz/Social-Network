import {NavLink, useNavigate} from 'react-router-dom';
import classes from './Header.module.scss';
import {useContext, useState} from "react";
import {Context} from "../../index";
import {observer} from "mobx-react-lite";
import Modal from "../UI/Modal/Modal";
import LogoutModal from "../UI/LogoutModal/LogoutModal";

const setActive = ({isActive}: any) => isActive ? classes.nav__item__active : classes.nav__item

const Header = () => {
    const {store} = useContext(Context);
    const [visible, setVisible] = useState<boolean>(false);

    const handleLogout = () => {
        store.logout();
        setVisible(false);
        localStorage.removeItem('token');
        window.location.href = '/login';
    }

    return (
        <div className={classes.header}>
            <div className={classes.title}>QAUYM</div>
            {
                store.isAuth ? (
                    <div className={classes.nav}>
                        <NavLink to={'/'} className={setActive} end>Feed</NavLink>
                        <NavLink to={`profile/${store.user.id}`} className={setActive}>Profile</NavLink>
                        <NavLink to={'settings'} className={setActive}>Settings</NavLink>
                        <div className={classes.nav__item} onClick={() => setVisible(true)}>Logout</div>
                    </div>
                ) : (
                    <div className={classes.nav}>
                        <NavLink to={'/login'} className={setActive} end>Login</NavLink>
                        <NavLink to={'signup'} className={setActive}>Sign Up</NavLink>
                    </div>
                )
            }

            <LogoutModal visible={visible} setVisible={setVisible} handleLogout={handleLogout}/>
        </div>
    );
}

export default observer(Header);