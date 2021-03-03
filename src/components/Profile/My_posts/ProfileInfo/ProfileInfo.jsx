import React from "react";
import s from "./ProfileInfo.module.css";
import pageHeader from "../../../Image/page-header.png";
import Preloader from "../../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus"
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = (props) => {
    //если нет профиля покажи Preloader
    if (!props.profile) {
        return <Preloader/>
    }

    let work = '';
    if (props.profile.lookingForAJob == true) {
        work = 'looking for work 0_0'
    } else {
        work = 'there is work'
    }
    ;

    return (
        <div>
            <div>
                <img className={s.img} src={pageHeader}/>
            </div>
            <div className={s.profileInfo}>
                <div>
                    <h2>
                        {props.profile.fullName}
                    </h2>
                    <div>

                        <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
                    </div>
                </div>
                <div>
                    About me: {props.profile.aboutMe}
                </div>
                <div>
                    Work: {work}
                </div>
                <img src={props.profile.photos.large}/>
                <div>
                    {props.profile.contacts.facebook}
                </div>
                <div>
                    {props.profile.contacts.vk}
                </div>
                <div>
                    {props.profile.contacts.instagram}
                </div>
                <div>
                    {props.profile.contacts.github}
                </div>
                <div>
                    {props.profile.contacts.youtube}
                </div>
                <div>
                    {props.profile.contacts.website}
                </div>
            </div>
        </div>
    );
}

export default ProfileInfo;