import React from "react";
import s from "./Users.module.css"
import * as axios from "axios";
import userPhoto from "../image/default_avatar.png"

const Users = (props) => {
    if (props.users.length === 0) {
        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(response => {
                props.setUsers(response.data.items)
            });
    }

    return (
        <div>
            {props.users.map(u =>
                <div key={u.id}>
                    <span>
                        <div>
                            <img className={s.image} src={u.photos.small != null ? u.photos.small : userPhoto} alt=""/>
                        </div>
                        <div>
                            {u.subscribed
                                ? <button className={s.button} onClick={() => {
                                    props.unsubscribe(u.id)
                                }}>UNSUBSCRIBE</button>
                                : <button className={s.button} onClick={() => {
                                    props.subscribe(u.id)
                                }}>SUBSCRIBE</button>}
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{"u.location.country"}</div>
                            <div>{"u.location.city"}</div>
                        </span>
                    </span>
                </div>)}
        </div>
    )
}

export default Users;