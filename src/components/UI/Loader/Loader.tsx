import React from 'react';
import classes from "./Loader.module.scss";

function Loader() {
    return (
        <div className={classes.main__feed__loading}>
            <div className={classes.main__feed__loading__text}>Loading...</div>
        </div>
    );
}

export default Loader;