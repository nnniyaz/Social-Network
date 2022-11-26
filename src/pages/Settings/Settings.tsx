import Button from 'components/UI/Button/Button';
import {useContext, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import classes from './Settings.module.scss';
import {IUser} from "../../models/IUser";
import {Context} from "../../index";
import Modal from "../../components/UI/Modal/Modal";
import LogoutModal from "../../components/UI/LogoutModal/LogoutModal";

const Settings = () => {
    const navigate = useNavigate();
    const {store} = useContext(Context);
    const [visible, setVisible] = useState<boolean>(false);
    const [user, setUser] = useState<IUser>(
        {
            id: store.user.id,
            isActivated: store.user.isActivated,
            email: store.user.email,
            roles: store.user.roles,
            firstName: store.user.firstName,
            lastName: store.user.lastName,
            country: store.user.country,
            city: store.user.city,
            createdAt: store.user.createdAt,
        }
    );

    const saveEmail = async (e: any) => {
        e.preventDefault();
        await store.updateUserEmail(user.id, user.email);
    }

    const savePassword = async (e: any) => {
        e.preventDefault();
        console.log('Password was saved');
    }

    const handleLogout = async () => {
        await store.logout();
        setVisible(false);
        localStorage.removeItem('token');
        window.location.href = '/login';
    }

    return (
        <div className={classes.main}>
            <div className={classes.main__container}>
                <Tabs className={classes.tabbar} selectedTabClassName={classes.tab__active}>
                    <TabList className={classes.sidebar}>
                        <Tab className={classes.tab}>
                            <div className={classes.text}>Email</div>
                            <div className={classes.tab__icon}>
                                <svg enableBackground='new 0 0 24 24' version="1.1" viewBox="0 0 24 24" width='24px' height='24px' xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><g id="info" /><g id="icons"><path d="M20,3H4C1.8,3,0,4.8,0,7v10c0,2.2,1.8,4,4,4h16c2.2,0,4-1.8,4-4V7C24,4.8,22.2,3,20,3z M21.6,8.8l-7.9,5.3   c-0.5,0.3-1.1,0.5-1.7,0.5s-1.2-0.2-1.7-0.5L2.4,8.8C2,8.5,1.9,7.9,2.2,7.4C2.5,7,3.1,6.9,3.6,7.2l7.9,5.3c0.3,0.2,0.8,0.2,1.1,0   l7.9-5.3c0.5-0.3,1.1-0.2,1.4,0.3C22.1,7.9,22,8.5,21.6,8.8z" id="email" /></g></svg>
                            </div>
                        </Tab>
                        <Tab className={classes.tab}>
                            <div className={classes.text}>Password</div>
                            <div className={classes.tab__icon}>
                                <svg height="24px" viewBox="0 0 24 24" width="24px" xmlns="http://www.w3.org/2000/svg"><path d="M3.433 17.325 3.079 19.8a1 1 0 0 0 1.131 1.131l2.475-.354C7.06 20.524 8 18 8 18s.472.405.665.466c.412.13.813-.274.948-.684L10 16.01s.577.292.786.335c.266.055.524-.109.707-.293a.988.988 0 0 0 .241-.391L12 14.01s.675.187.906.214c.263.03.519-.104.707-.293l1.138-1.137a5.502 5.502 0 0 0 5.581-1.338 5.507 5.507 0 0 0 0-7.778 5.507 5.507 0 0 0-7.778 0 5.5 5.5 0 0 0-1.338 5.581l-7.501 7.5a.994.994 0 0 0-.282.566zM18.504 5.506a2.919 2.919 0 0 1 0 4.122l-4.122-4.122a2.919 2.919 0 0 1 4.122 0z" /></svg>
                            </div>
                        </Tab>
                    </TabList>

                    <TabPanel selectedClassName={classes.tabpanel}>
                        <form className={classes.content} onSubmit={saveEmail}>
                            <div className={classes.email}>
                                <div className={classes.email__text}>Current email:</div>
                                <div className={classes.email__main}>{`• ${user.email}`}</div>
                            </div>

                            <label className={classes.labelWrapper}>
                                <div className={classes.label}>New Email</div>
                                <input
                                    value={user.email}
                                    onChange={e => setUser({...user, email: e.target.value})}
                                    placeholder='Email'
                                    className={classes.input}
                                    type={'email'}
                                />
                            </label>

                            <div className={classes.footer__btn}>
                                <Button color='green'>Save</Button>
                            </div>
                        </form>
                        {/*<div className={classes.logout__button}>*/}
                        {/*    <div className={classes.btn} onClick={() => logout()}>Logout</div>*/}
                        {/*</div>*/}
                    </TabPanel>

                    <TabPanel selectedClassName={classes.tabpanel}>
                        <form className={classes.content}>
                            <label className={classes.labelWrapper}>
                                <div className={classes.label}>Current Password</div>
                                <input
                                    placeholder='Enter your current password'
                                    className={classes.input}
                                    type={'password'}
                                />
                            </label>

                            <label className={classes.labelWrapper}>
                                <div className={classes.label}>New Password</div>
                                <input
                                    placeholder='Enter your new password'
                                    className={classes.input}
                                    type={'password'}
                                />
                                <input
                                    placeholder='Confirm your new password'
                                    className={classes.input}
                                    type={'password'}
                                />
                            </label>

                            <div className={classes.footer__btn}>
                                <Button color='green' click={saveEmail}>Save</Button>
                            </div>
                        </form>
                    </TabPanel>
                </Tabs>

                <div className={classes.logout__button}>
                    <div className={classes.btn} onClick={() => setVisible(true)}>Logout</div>
                </div>

                <LogoutModal visible={visible} setVisible={setVisible} handleLogout={handleLogout}/>

            </div>
            <div className={classes.author__rights}>
                <div className={classes.author__rights__text}>© Niyaz Nassyrov | 2022</div>
            </div>
        </div>
    )
}

export default Settings;