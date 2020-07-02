import React from 'react';
import {NavLink} from "react-router-dom";
import s from "./DialogsItem.module.css";

const DialogsItem = (props) => {
    let path = '/dialogs/' + props.id;
    return (
        <div className={s.dialog}>
            <div className={s.wrapper}>
                <NavLink className={s.nameDialog} activeClassName={s.activeLink} to={path}>{props.name}</NavLink>
            </div>
        </div>
    );
}

export default DialogsItem;