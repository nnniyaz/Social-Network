import Button from 'components/UI/Button/Button';
import {FormEvent, useContext, useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import classes from './ProfileEdit.module.scss';
import {IUser} from "../../models/IUser";
import {Context} from "../../index";

const ProfileEdit = () => {
    const [onMouseEnter, setOnMouseEnter] = useState(false);
    const navigate = useNavigate();
    const {store} = useContext(Context);
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

    const cancelClick = () => {
        navigate('/profile/' + user.id);
    }

    const saveClick = async (e: FormEvent) => {
        e.preventDefault();
        const res = await store.updateUserInfo(user.id, user.firstName, user.lastName, user.country, user.city);
        if (res?.success) {
            navigate('/profile/' + user.id);
        } else {
            console.log(res);
        }
    }

    return (
        <div className={classes.main}>
            <div className={classes.main__container} onSubmit={saveClick}>
                <div className={classes.main__container__header}>
                    <Link to={`/profile/${store.user.id}`} className={classes.go__back}
                          onMouseEnter={() => setOnMouseEnter(true)} onMouseLeave={() => setOnMouseEnter(false)}>
                        <svg height="25px" id="Layer_1" enableBackground="new 0 0 32 32" version="1.1"
                             viewBox="0 0 32 32" width="25px" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg"
                             xmlnsXlink="http://www.w3.org/1999/xlink" fill={onMouseEnter ? 'white' : 'black'}>
                            <path
                                d="M28,14H8.8l4.62-4.62C13.814,8.986,14,8.516,14,8c0-0.984-0.813-2-2-2c-0.531,0-0.994,0.193-1.38,0.58l-7.958,7.958  C2.334,14.866,2,15.271,2,16s0.279,1.08,0.646,1.447l7.974,7.973C11.006,25.807,11.469,26,12,26c1.188,0,2-1.016,2-2  c0-0.516-0.186-0.986-0.58-1.38L8.8,18H28c1.104,0,2-0.896,2-2S29.104,14,28,14z"/>
                        </svg>
                    </Link>
                    <div className={classes.title}>Profile Edit</div>
                </div>

                <form className={classes.block} onSubmit={saveClick}>
                    <label className={classes.labelWrapper}>
                        <div className={classes.label}>First Name</div>
                        <input
                            value={user.firstName}
                            onChange={(e) => setUser({...user, firstName: e.target.value})}
                            placeholder="First Name"
                            className={classes.input}
                            type={'text'}
                            minLength={3}
                            required
                        />
                    </label>
                    <label className={classes.labelWrapper}>
                        <div className={classes.label}>Last Name</div>
                        <input
                            value={user.lastName}
                            onChange={(e) => setUser({...user, lastName: e.target.value})}
                            placeholder="Last Name"
                            className={classes.input}
                            type={'text'}
                            minLength={3}
                            required
                        />
                    </label>
                    <label className={classes.labelWrapper}>
                        <div className={classes.label}>Country</div>
                        <input
                            value={user.country}
                            onChange={(e) => setUser({...user, country: e.target.value})}
                            placeholder="Country"
                            className={classes.input}
                            type={'text'}
                            required
                        />
                    </label>
                    <label className={classes.labelWrapper}>
                        <div className={classes.label}>City</div>
                        <input
                            value={user.city}
                            onChange={(e) => setUser({...user, city: e.target.value})}
                            placeholder="City"
                            className={classes.input}
                            type={'text'}
                            required
                        />
                    </label>

                    <div className={classes.footer__btn}>
                        <Button color='regular' click={cancelClick}>Cancel</Button>
                        <Button color='green'>Save</Button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ProfileEdit;