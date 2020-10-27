import React from 'react';
import s from './Profile.module.css';
import ProfileInfo from "./My_posts/ProfileInfo/ProfileInfo";
import MyPostsContainer from "./My_posts/MyPostsContainer";
import Preloader from "../common/preloader/Preloader";

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer
                store={props.store}
            />
        </div>
    );
}

export default Profile;