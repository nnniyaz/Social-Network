import Button from 'components/UI/Button/Button';
import { UserInterface } from 'context';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import classes from './Settings.module.scss';

const Settings = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [user, setUser] = useState<UserInterface>(
        {
            id: 0,
            firstName: 'Нияз',
            lastName: 'Насыров',
            email: 'niyaz@gmail.com',
            createdAt: 'October 29, 2022',
            country: 'Kazakhstan',
            city: 'Almaty',
            nickname: 'nnniyaz',
            color: 'black',
        }
    );

    const saveEmail = (e: any) => {
        e.preventDefault();
        console.log('Email was saved');
    }

    const savePassword = (e: any) => {
        e.preventDefault();
        console.log('Password was saved');
    }

    return (
        <div className={classes.main}>
            <div className={classes.main__container}>
                <Tabs className={classes.tabbar} selectedTabClassName={classes.tab__active}>
                    <TabList className={classes.sidebar}>
                        <Tab className={classes.tab}>Email</Tab>
                        <Tab className={classes.tab}>Password</Tab>
                    </TabList>

                    <TabPanel selectedClassName={classes.tabpanel}>
                        <form className={classes.content}>
                            <div className={classes.email}>
                                <div className={classes.email__text}>Current email:</div>
                                <div className={classes.email__main}>{`• ${user.email}`}</div>
                            </div>

                            <label className={classes.labelWrapper}>
                                <div className={classes.label}>New Email</div>
                                <input
                                    placeholder='Email'
                                    className={classes.input}
                                    type={'email'}
                                />
                            </label>

                            <div className={classes.footer__btn}>
                                <Button color='green' click={saveEmail}>Save</Button>
                            </div>
                        </form>
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
            </div>
        </div>
    )
}

export default Settings;