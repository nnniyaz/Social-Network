import {NavLink} from 'react-router-dom';
import classes from './Header.module.scss';
import {useContext, useState} from "react";
import {Context} from "../../index";
import {observer} from "mobx-react-lite";
import Modal from "../UI/Modal/Modal";

const setActive = ({isActive}: any) => isActive ? classes.nav__item__active : classes.nav__item

const Header = () => {
    const {store} = useContext(Context);

    const [visible, setVisible] = useState<boolean>(false);

    return (
        <div className={classes.header}>
            <div className={classes.title}>QAUYM</div>
            {
                store.isAuth ? (
                    <div className={classes.nav}>
                        <NavLink to={'/'} className={setActive} end>Feed</NavLink>
                        <NavLink to={'profile'} className={setActive}>Profile</NavLink>
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

            <Modal visible={visible} setVisible={setVisible}>
                <div className={classes.modal__inner__block}>
                    <h2>Are you sure you want to logout?</h2>
                    <div className={classes.modal__inner__block__row}>
                        <button className={classes.modal__inner__block__btn} onClick={() => setVisible(false)}>
                            Cancel
                        </button>
                        <button className={classes.modal__inner__block__btn} onClick={() => {
                            store.logout()
                            setVisible(false)
                        }}>
                            Sign Out
                        </button>
                    </div>
                </div>
            </Modal>
        </div>
    );
}

export default observer(Header);