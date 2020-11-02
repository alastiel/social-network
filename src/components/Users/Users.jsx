import React from "react";
import s from "./Users.module.css";
import userPhoto from "../Image/default_avatar.png";
import {NavLink} from "react-router-dom";

let Users = (props) => {
    // Math.ceil - округляет число в большую сторону
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i=1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return <div>
        <div>
            {pages.map(p => {
                return <span className={props.currentPage === p && s.pageNumber}
                             onClick={() => {props.onPageChanged(p)}}>{p}</span>
            })}
        </div>
        {props.users.map(u =>
            <div key={u.id}>
                    <span>
                        <div>
                            <NavLink to={'/Profile/' + u.id}>
                            <img className={s.image} src={u.photos.small != null ? u.photos.small : userPhoto} alt=""/>
                            </NavLink>
                        </div>
                        <div>
                            {u.followed
                                ? <button disabled={props.subscribeInProgress.some(id => id === u.id)} className={s.button} onClick={() => {
                                    props.unsubscribeUser(u.id);
                                }}>UNSUBSCRIBE</button>

                                : <button disabled={props.subscribeInProgress.some(id => id === u.id)} className={s.button} onClick={() => {
                                    props.subscribeUser(u.id);
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
}
export default Users;