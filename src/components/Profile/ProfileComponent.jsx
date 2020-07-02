import React from 'react';
import MyPosts from './My_posts/MyPosts';
import s from './ProfileComponent.module.css';
import ProfileInfo from "./My_posts/ProfileInfo/ProfileInfo";

const ProfileComponent = () => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts/>
        </div>
    );
}

export default ProfileComponent;