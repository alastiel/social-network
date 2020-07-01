import React from 'react';
import s from './Navigation.module.css';

const Navigation = () => {
    return (
        <nav className={s.nav}>
        <div className={`${s.item} ${s.active}`}>
          <a href='/ProfileComponent'>Profile</a>
        </div>
        <div className={s.item}>
          <a href='/Dialogs'>Messages</a>
        </div>
        <div className={s.item}>
          <a href='/News'>News</a>
        </div>
        <div className={s.item}>
          <a href='/Music'>Music</a>
        </div>
        <div className={s.item}>
          <a href='/Settings' >Settings</a>
        </div>
      </nav>
    );
}

export default Navigation;