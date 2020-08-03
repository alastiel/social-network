import React from 'react';
import s from './ProfileComponent.module.css';
import ProfileInfo from "./My_posts/ProfileInfo/ProfileInfo";
import MyPostsContainer from "./My_posts/MyPostsContainer";

const ProfileComponent = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer
                store={props.store}
            />
        </div>
    );
}

export default ProfileComponent;