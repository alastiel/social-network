import React from 'react';
import pageHeader from '../image/page-header.png';
import s from './ProfileComponent.module.css';

const ProfileComponent = () => {
    return (
        <div className={s.content}>
            <div>
                <img src={pageHeader} />
            </div>
            <div>
                avatar + info
            </div>
            <div className={s.item}>
                post
            </div>
            <div className={s.item}>
                post text
            </div>
        </div>
    );
}

export default ProfileComponent;