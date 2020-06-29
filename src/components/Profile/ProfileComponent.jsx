import React from 'react';
import pageHeader from '../image/page-header.png';
import MyPosts from './My_posts/MyPosts';
import s from './ProfileComponent.module.css';

const ProfileComponent = () => {
    return (
        <div className={s.content}>
            <div>
                <img className={s.img} src={pageHeader} />
            </div>
            <div>
                avatar + info
            </div>
            <div>
                <MyPosts />
            </div>
        </div>
    );
}

export default ProfileComponent;