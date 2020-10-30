import React from 'react';
import logo from '../Image/logo.png';
import s from'./Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={s.header}>
            <img src={logo} />
            <div className={s.login}>
                {props.isAuth ? props.login : <NavLink to={'/Login'}>Login</NavLink>}
            </div>
        </header>
    );
}

export default Header;