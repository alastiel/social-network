import React from 'react';
import logo from '../image/logo.png';
import s from'./Header.module.css';

const Header = () => {
    return (
        <header className={s.header}>
            <img src={logo} />
        </header>
    );
}

export default Header;