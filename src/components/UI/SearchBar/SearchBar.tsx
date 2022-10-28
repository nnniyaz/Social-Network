import { useState } from 'react';
import classes from './SearchBar.module.scss';

const SearchBar = (props: any) => {
    const [focused, setFocused] = useState(false);

    return (
        <div className={classes.search__bar}>
            <label className={classes.search} onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}>
                <div className={classes.search__icon}>
                    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" width="22px" height="22px" fill={focused ? '#5e5e5e' : '#969696'}><title /><g id="search"><path d="M29.71,28.29l-6.5-6.5-.07,0a12,12,0,1,0-1.39,1.39s0,.05,0,.07l6.5,6.5a1,1,0,0,0,1.42,0A1,1,0,0,0,29.71,28.29ZM14,24A10,10,0,1,1,24,14,10,10,0,0,1,14,24Z" /></g></svg>
                </div>
                <input className={classes.search__input} type={'text'} placeholder={'Search'} {...props} />
            </label>
        </div>
    );
}

export default SearchBar;