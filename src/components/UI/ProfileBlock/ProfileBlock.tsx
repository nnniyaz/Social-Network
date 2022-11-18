import React from 'react';
import classes from "./ProfileBlock.module.scss";
import {Link} from "react-router-dom";
import {formatDate} from "../../../utils/profileUtil";
import {IUser} from "../../../models/IUser";

function ProfileBlock({user}: { user: IUser }) {
    return (
        <div className={classes.profile__block}>
            <div className={classes.profile__background} style={{backgroundColor: `black`}}></div>
            <div className={classes.profile__block__info}>
                <div className={classes.profile__block__info__avatar} style={{backgroundColor: `black`}}></div>
                <Link to={'edit'} className={classes.edit}>
                    <div className={classes.edit__text}>Edit</div>
                    <div className={classes.edit__icon}>
                        <svg height="17" viewBox="0 0 48 48" width="17" xmlns="http://www.w3.org/2000/svg"
                             fill="white">
                            <path
                                d="M6 34.5v7.5h7.5l22.13-22.13-7.5-7.5-22.13 22.13zm35.41-20.41c.78-.78.78-2.05 0-2.83l-4.67-4.67c-.78-.78-2.05-.78-2.83 0l-3.66 3.66 7.5 7.5 3.66-3.66z"/>
                            <path d="M0 0h48v48h-48z" fill="none"/>
                        </svg>
                    </div>
                </Link>
                <div className={classes.profile__block__info__main}>
                    <div className={classes.name}>{`${user.firstName} ${user.lastName}`}</div>
                    <div className={classes.nickname}>{`${user.email}`}</div>
                    <div className={classes.bio}>
                        <div
                            className={classes.registration__date}>{`In system from: ${formatDate(user.createdAt)}`}</div>
                        <div className={classes.location}>{`${user.country}, ${user.city}`}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfileBlock;