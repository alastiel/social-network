import React from 'react';
import MyPosts from './My_posts/MyPosts';
import s from './ProfileComponent.module.css';
import ProfileInfo from "./My_posts/ProfileInfo/ProfileInfo";

const ProfileComponent = (props) => {
        return (
        <div>
            <ProfileInfo/>
            <MyPosts myPostData={props.state.myPostData} addPost={props.addPost}/>
        </div>
    );
}

export default ProfileComponent;