import React from 'react';
import s from "./ProfileInfo.module.css";
import pageHeader from "../../../image/page-header.png";

const ProfileInfo = (props) => {
    return (
        <div>
            <div>
                <img className={s.img} src={pageHeader}/>
            </div>
            <div className={s.profileInfo}>
                avatar + info
            </div>
        </div>
    );
}

export default ProfileInfo;