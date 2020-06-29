import React from 'react';
import s from './MyPost.module.css'


const MyPost = () => {
    return (
        <div>
            <div className={s.item}>
                <img src='https://ps.w.org/wp-user-avatar/assets/icon-256x256.png?rev=1755722'/>
                    post 1
            </div>
        </div>
    );

}

export default MyPost;