import React from 'react';
import ProfileInfo from "./My_posts/ProfileInfo/ProfileInfo";
import MyPostsContainer from "./My_posts/MyPostsContainer";

const Profile = (props) => {

    return (
        <div>
            <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
            <MyPostsContainer
                store={props.store}
            />
        </div>
    );
}

export default Profile;