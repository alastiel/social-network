import React, {useEffect, useState} from "react"
import s from "./ProfileStatus.module.css";

const ProfileStatusWithHooks = (props) => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect(() => {
        setStatus(props.status)
    },[props.status]) /*зависимость*/

    let activateEditMode = () => {
        setEditMode(true)
    }
    let deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status);
    }
    const onStatusChange = (e) => {
            setStatus(e.currentTarget.value)
    }


    return <div>
        {!editMode &&
        <div className={s.activeStatus}>
            <span onDoubleClick={activateEditMode}> {props.status || 'no status'}</span>
        </div>
        }
        {editMode &&
        <div>
            <input onChange={onStatusChange} autoFocus={true} onBlur={deactivateEditMode} value={status}/>
        </div>
        }
    </div>
}

export default ProfileStatusWithHooks;